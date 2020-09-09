// Unrefined example of a basic Nightwatch test case for the calculator example program.
// See calcTests2.js for a better pattern where we start to use the Page Object Model.

module.exports = {
    '@tags': ['bad'],
    'hello world': function (browser) {
        browser
            .url('http://localhost:3000')
            .assert.title('reallyMello calculator');
    },
    'two plus two is four': function (browser) {
        browser
            .url('http://localhost:3000')
            .setValue('#numList1', 2)
            .setValue('#operatorList', '+')
            .setValue('#numList2', 2)
            .click('#submit')
            .expect.element('#result').text.to.equal('4');
    }
}
