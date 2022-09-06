module.exports = {
  'will parse email body': (browser) => {
    browser.assert.emailBodyContains(
      'here in my car I feel safest of all',
      browser.globals.mailtrap.mailboxId
    );
  },
  'will partial match email body using search': (browser) => {
    browser.assert.emailBodyContains(
      'reaching out to you',
      browser.globals.mailtrap.mailboxId,
      'another email'
    );
  },
  'will work with not operator': (browser) => {
    browser.assert.not.emailBodyContains(
      "about your car's extended warranty",
      browser.globals.mailtrap.mailboxId,
      'another car email'
    );
  },
};
