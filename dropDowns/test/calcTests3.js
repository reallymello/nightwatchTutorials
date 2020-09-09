// Final form of an optimized test class using Nightwatch.js's Page Object API
// See calcTests1.js and calcTests2.js for incremental changes.
// Future tutorials we'll cover optimal test case selection.

module.exports = {
    '@tags': ['best'],
    beforeEach: function (browser) {
        browser.page.calculator().navigate();
    },
    'onload welcome with addition and zeroed values': function (browser) {
        browser
            .assert.title('reallyMello calculator');

        browser.page.calculator()
            .assert.containsText('@result', '')
            .assert.containsText('@firstNumberSelected', '0')
            .assert.containsText('@secondNumberSelected', '0')
            .assert.containsText('@operatorSelected', '+');
    },
    'two plus two is four': function (browser) {
        browser.page.calculator()
            .add(2, 2)
            .expect.element('@result')
            .text.to.equal('4');
    },
    '5 plus 5 equals 10': function (browser) {
        // Example of another style of writing the test
        // which may hide too much of what is being actually tested.
        // This may be a step too far depending on your style preference.
        browser.page.calculator()
            .adding(5).plus(5).equals(10);
    },
    '0-5=-5': function (browser) {
        browser.page.calculator()
            .subtract(0, 5)
            .expect.element('@result')
            .text.to.equal('-5');
    },
    '5-0=5': function (browser) {
        browser.page.calculator()
            .subtract(5, 0)
            .expect.element('@result')
            .text.to.equal('5');
    },
    '2-2=0': function (browser) {
        browser.page.calculator()
            .subtract(2, 2)
            .expect.element('@result')
            .text.to.equal('0');
    },
    '5*2=10': function (browser) {
        browser.page.calculator()
            .multiply(5, 2)
            .expect.element('@result')
            .text.to.equal('10');
    },
    '5 divided by 0 is Infinity': function (browser) {
        browser.page.calculator()
            .divide(5, 0)
            .expect.element('@result')
            .text.to.equal('Infinity');
    },
    '0/5=0': function (browser) {
        browser.page.calculator()
            .divide(0, 5)
            .expect.element('@result')
            .text.to.equal('0');
    }
}
