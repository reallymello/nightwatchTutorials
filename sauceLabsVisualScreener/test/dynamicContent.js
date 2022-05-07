module.exports = {
  before: (browser) => {
    browser.beginVisualTest('Dynamic content test');
    browser.page.dynamicContent().navigate();
  },
  after: (browser) => {
    browser.endSauce();
    browser.end();
  },
  /**
   * This test is an example of catching unexpected content changes.
   * The example site navigated to randomly varies the content of the last row.
   * The first time through the test will fail because you have no baseline.
   * Accept the baseline in the Sauce Visual portal and rerun the test.
   * Subsequent tests should fail due to changes in the last row only.
   *
   * @param {*} browser Nightwatch browser api
   */
  'Content verbiage should not change': (browser) => {
    browser.takeSnapshot(
      'Dynamic content page'
      /* 
       Uncommenting this line below is how to ignore certain areas in the DOM
       which is useful to ignore dynamic areas like ad banners or other areas
       of the site you don't want included in visual checks because they are
       expected to change frequently or are outside of scope.
       This arguement accepts a comma delimited set of CSS selects to ignore.
      */
      //'#content div.row:nth-of-type(3)'
    );

    browser.assert.visuallyTheSame();
  },
};
