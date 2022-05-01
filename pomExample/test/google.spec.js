module.exports = {
  'Google search test': function (browser) {
    let google = browser.page.google();

    google
      .navigate()
      .assert.titleEquals('Google')
      .assert.visible('@searchBar')
      .setValue('@searchBar', 'nightwatch');

    google
      .clickSearch()
      .expect.element('body')
      .text.to.contain(
        'Nightwatch.js | Node.js powered End-to-End testing framework'
      );

    browser.end();
  },
};
