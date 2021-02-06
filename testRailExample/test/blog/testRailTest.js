/*  Ensure system variables exist named TESTRAIL_USERNAME and TESTRAIL_API_KEY
    holding your TestRail username and API key.
    https://www.davidmello.com/testrail-with-nightwatchjs/
*/

module.exports = {
    beforeEach: function (browser) {
        browser.page.blog().navigate();
    },
    afterEach: function (browser) {
        browser.updateTestRail(browser);
        browser.end();
    },
    'Can see homepage': function (browser) {
        browser.testId = 112233;

        browser.page.blog().assert.title('David Mello')
    },
    'Can navigate to Software Testing': function (browser) {
        browser.testId = 112234;

        browser.page.blog().click('@softwareTesting')
            .expect.element('h1').text.to.equal('Software Testing and Quality Assurance')
    },
    'Can change page theme': function (browser) {
        browser.testId = 112235;

        browser.page.blog()
            .assert.cssProperty('body', 'background-color', 'rgba(14, 15, 23, 1)')
            .click('@themeToggleButton')
            .assert.cssProperty('body', 'background-color', 'rgba(255, 255, 255, 1)')
            .click('@themeToggleButton')
            .assert.cssProperty('body', 'background-color', 'rgba(14, 15, 23, 1)')
    }
}
