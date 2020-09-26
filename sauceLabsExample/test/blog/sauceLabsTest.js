module.exports = {
    beforeEach: function (browser) {
        browser.page.blog().navigate();
    },
    afterEach: function (browser) {
        browser.end();
        browser.endSauce();
    },
    'Can see homepage': function (browser) {
        browser.page.blog().assert.title('David Mello')
    },
    'Can navigate to Software Testing': function (browser) {
        browser.page.blog().click('@softwareTesting')
            .expect.element('h1').text.to.equal('Software Testing and Quality Assurance')
    },
    'Can change page theme': function (browser) {
        browser.page.blog()
            .assert.cssProperty('body', 'background-color', 'rgba(14, 15, 23, 1)')
            .click('@themeToggleButton')
            .assert.cssProperty('body', 'background-color', 'rgba(255, 255, 255, 1)')
            .click('@themeToggleButton')
            .assert.cssProperty('body', 'background-color', 'rgba(14, 15, 23, 1)')
    }
}
