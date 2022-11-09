/**
 * This test currently fails with an error, reported to SauceLabs
 * Error
     Response 500 POST https://hub.screener.io/wd/hub/session/[redacted]]/execute/sync (443ms)
   {
     status: 13,
     sessionId: '[redacted]',
     value: {
       error: 'Visual End command already called',
       message: 'Visual End command already called'
     },
     state: 'unhandled error'
  }
 */
module.exports = {
  before: (browser) => {
    browser.navigateTo('http://www.google.com');
  },
  after: (browser) => {
    browser.endSauce();
    browser.end();
  },
  Test1: (browser) => {
    browser.beginVisualTest('Saucebug1');
    browser.takeSnapshot('Google1');

    browser.assert.visuallyTheSame();
  },
  Test2: (browser) => {
    browser.beginVisualTest('Saucebug2');
    browser.takeSnapshot('Google2');

    browser.assert.visuallyTheSame();
  },
};
