import { NightwatchAPI, NightwatchTests } from 'nightwatch';
import i18next from '../locales/i18n';

const localizationTests: NightwatchTests = {
  before: async () => {
    browser.url('http://www.duckduckgo.com');

    const detectedLanguageCode = await browser.executeScript(() => {
      return navigator.language;
    });

    i18next.changeLanguage(detectedLanguageCode);
  },
  'Header message displays expected marketing text': (
    browser: NightwatchAPI
  ) => {
    browser.expect.element('h2').text.to.equal(i18next.t('switchToDuckDuckGo'));
  },
  'Search input has placeholder text': (browser: NightwatchAPI) => {
    browser.expect
      .element('#searchbox_input')
      .to.have.attribute('placeholder')
      .which.equals(i18next.t('searchPlaceHolder'));
  },
  'Can search for localization libraries': (browser: NightwatchAPI) => {
    browser.element('#searchbox_input').setValue('i18next');
    browser.element('[aria-label="Search"]').click();

    browser.waitForElementNotPresent('#searchbox_input');

    browser.expect
      .element('[data-testid="result-title-a"]')
      .text.to.equal('Introduction | i18next documentation');
  },
  'Can search images': (browser: NightwatchAPI) => {
    browser.element(By.linkText(i18next.t('images'))).click();
    browser.expect.element(
      '[alt="A Complete Guide to Internationalization with React i18next"]'
    ).is.present;
  },
  after: () => {
    browser.end();
  },
};

export default localizationTests;
