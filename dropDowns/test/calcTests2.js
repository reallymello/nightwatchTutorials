// Here we start to refactor the tests from calcTests1.js to use
// test hooks and the Page Object Model.
// See calcTests3.js for further refactoring using Nightwatch Page Object commands.

module.exports = {
    '@tags': ['better'],
    beforeEach: function (browser) {
        let calcPage = browser.page.calculator();
        calcPage.navigate();
    },
    'hello world': function (browser) {
        browser
            .assert.title('reallyMello calculator');
    },
    'two plus two is four': function (browser) {
        let calcPage = browser.page.calculator();

        calcPage
            .setValue('@firstNumber', 2)
            .setValue('@operator', '+')
            .setValue('@secondNumber', 2)
            .click('@submit')
            .expect.element('@result').text.to.equal('4');
    }
}
