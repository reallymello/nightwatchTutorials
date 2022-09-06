module.exports = {
  'will return all emails without search filter': (browser) => {
    browser.assert.expectedInboxCount(3, browser.globals.mailtrap.mailboxId);
  },
  'will return email count matching search filter': (browser) => {
    browser.assert.expectedInboxCount(
      2,
      browser.globals.mailtrap.mailboxId,
      'another'
    );
  },
  'will not return all emails when filter is used': (browser) => {
    browser.assert.not.expectedInboxCount(
      3,
      browser.globals.mailtrap.mailboxId,
      'another'
    );
  },
};
