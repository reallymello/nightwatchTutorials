const assert = require('assert');

module.exports = {
  'Can get link from email': async (browser) => {
    const url = await browser.getLinkFromEmail(
      browser.globals.mailtrap.mailboxId,
      'test email with link'
    );
    assert.strictEqual(url, 'https://www.google.com');
  },
  'Will return empty if no emails match': async (browser) => {
    const url = await browser.getLinkFromEmail(
      browser.globals.mailtrap.mailboxId,
      'this does not match any results'
    );
    assert.strictEqual(url, '');
  },
  'Will return not found if mailbox is invalid': async (browser) => {
    const url = await browser.getLinkFromEmail('999');
    assert.strictEqual(url.error, 'Not Found');
  },
};
