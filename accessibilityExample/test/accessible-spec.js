/*
Rule Explanations
https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
*/
module.exports = {
    '@tags': ['accessible'],
    'Accessible site example': function (browser) {

        browser
            .url('https://www.w3.org/WAI/demos/bad/after/home.html')
            .assert.title('Welcome to CityLights! [Accessible Home Page]')
            .axeInject()
            .axeRun('body', {
                rules: {}
            })
            .end();
    }
}
