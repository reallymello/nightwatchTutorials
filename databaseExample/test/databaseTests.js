module.exports = {
  '@tags': ['database'],
  afterEach: async (browser) => {
    await browser.navigateTo('http://localhost:8080/reset');
  },
  'Verify only one Jane Doe': function (browser) {
    browser.assert.recordCountIs(
      1,
      'people',
      "first_name = 'Jane' AND last_name = 'Doe'"
    );
  },
  'Verify only one John Doe': function (browser) {
    browser.assert.recordCountIs(
      1,
      'people',
      "first_name = 'John' AND last_name = 'Doe'"
    );
  },
  'Verify only 3 people exist': function (browser) {
    browser.assert.recordCountIs(3, 'people');
  },
  'Verify John Wick count': function (browser) {
    let addJohnWick = 'http://localhost:8080/addPerson/john/wick';
    let removeJohnWick = 'http://localhost:8080/removePerson/john/wick';
    let whereJohnWick = "first_name = 'John' AND last_name = 'Wick'";
    browser.assert
      .recordCountIs(0, 'people', whereJohnWick)
      .url(addJohnWick)
      .assert.containsText('body', 'Added john wick')
      .url(addJohnWick)
      .url(addJohnWick)
      .assert.recordCountIs(3, 'people', whereJohnWick)
      .url(removeJohnWick)
      .assert.containsText('body', 'Removed john wick')
      .assert.recordCountIs(0, 'people', whereJohnWick)
      .assert.recordCountIs(
        1,
        'people',
        "first_name = 'Jane' AND last_name = 'Doe'"
      );
  },
  'Can getSqlValue': async (browser) => {
    let result = await browser.getSqlValue(
      "SELECT first_name FROM people WHERE first_name = 'John' and last_name = 'Doe'"
    );
    expect(result).to.have.property('first_name', 'John');
  },
  'Can change and getSqlValue': async (browser) => {
    let changeResult = await browser.runSql(
      "INSERT INTO people (first_name, last_name) VALUES ('Jon', 'Doughey')"
    );
    let result = await browser.getSqlValue(
      "SELECT first_name FROM people WHERE last_name = 'Doughey'"
    );
    expect(result).to.have.property('first_name', 'Jon');
  },
};
