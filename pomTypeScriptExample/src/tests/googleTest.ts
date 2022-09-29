import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import { GooglePage } from '../page-objects/googlePage';

const googleTest: NightwatchTests = {
  'Google search test': (browser: NightwatchBrowser) => {
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
  'Will find custom axe command types': (browser: NightwatchBrowser) => {
    const google: GooglePage = browser.page.googlePage();

    google
      .navigate()
      .assert.titleEquals('Google')
      .axeInject()
      .axeRun('body', {
        rules: {
          'color-contrast': {
            enabled: false,
          },
          region: {
            enabled: false,
          },
          'aria-required-attr': {
            enabled: false,
          },
          'aria-valid-attr-value': {
            enabled: false,
          },
        },
      });
  },
};

export default googleTest;
