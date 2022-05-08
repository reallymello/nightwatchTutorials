module.exports = {
  before: (browser) => {
    browser.beginVisualTest('Shifting content example');
    browser.page.shiftingContent().navigate();
  },
  after: (browser) => {
    browser.endSauce();
    browser.end();
  },
  /**
   * This test is an example of catching unexpected visual shifts in your layout.
   * The example site navigated to randomly varies the positioning of menus, images,
   * and a list.
   * The first time through the test will fail because you have no baseline.
   * Accept the baseline in the Sauce Visual portal and rerun the test.
   * One or more of the tests should fail and you can see what changed that caused
   * the test to fail inside the Sauce Visual portal.
   *
   * @param {*} browser Nightwatch browser api
   */
  'Content should not move around': (browser) => {
    browser.page.shiftingContent().click('@example1Link');
    browser.takeSnapshot('Menu page');
    browser.back();

    browser.page.shiftingContent().click('@example2Link');
    browser.takeSnapshot('Image page');
    browser.back();

    browser.page.shiftingContent().click('@example3Link');
    browser.takeSnapshot('List page');

    browser.assert.visuallyTheSame();
  },
};
