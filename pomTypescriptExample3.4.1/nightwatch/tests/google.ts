import { NightwatchAPI, NightwatchTests } from 'nightwatch';

const googleTest: NightwatchTests = {
  beforeEach: (browser: NightwatchAPI) => {
    // .navigate navigates to the URL defined in the url property of the GoogleSearchpage page object
    // Only using once so no need to place in a constant first.
    browser.page.Google.GoogleSearchPage().navigate();
  },
  'Google search test': (browser: NightwatchAPI) => {
    const searchPage = browser.page.Google.GoogleSearchPage();

    // pressEnter is defined in the GoogleSearchPage page object command collection
    searchPage.setValue('@searchInput', 'nightwatchjs').pressEnter();

    browser.page.Google.GoogleResultsPage()
      .waitForElementVisible('@searchResultsDiv')
      .assert.textContains('@searchResultsDiv', 'Nightwatch.js');
  },
  'Google page object section test': (browser: NightwatchAPI) => {
    const searchPage = browser.page.Google.GoogleSearchPage();

    searchPage.expect.section('@lowerBanner').to.be.visible;
    searchPage.section.lowerBanner.expect
      .element('@firstLink')
      .text.to.equal('Advertising');
    searchPage.section.lowerBanner.expect
      .element('@thirdLink')
      .text.to.equal('How Search works');

    searchPage.section.lowerBanner.clickHowSearchWorks();

    browser.expect
      .title()
      .to.equal('Google Search - What is Google Search and How Does it Work');
  },
  after: (browser: NightwatchAPI) => {
    browser.end();
  },
};

export default googleTest;
