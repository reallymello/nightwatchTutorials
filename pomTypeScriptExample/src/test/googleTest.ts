import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import { GooglePage } from '../page-objects/googlePage';

const googleTest: NightwatchTests = {
  'Google search test': function (browser: NightwatchBrowser) {
    const google: GooglePage = browser.page.googlePage();

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

export default googleTest;
