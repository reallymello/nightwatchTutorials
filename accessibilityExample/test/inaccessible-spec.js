/*
Rule Explanations
https://github.com/dequelabs/axe-core/blob/develop/doc/rule - descriptions.md
https://dequeuniversity.com/rules/axe/3.4
*/
module.exports = {
    '@tags': ['inaccessible'],
    'Inaccessible site': function (browser) {

        browser
            .url('https://www.w3.org/WAI/demos/bad/before/home.html')
            .assert.title('Welcome to CityLights! [Inaccessible Home Page]')
            .axeInject()
            .axeRun('body', {
                rules: {
                    'color-contrast': {
                        enabled: false
                    }
                },
            })
            .end();
    }
    /*,
        'MarsCommuter Deque Example': function (browser) {

            browser
                .url('https://dequeuniversity.com/demo/mars/')
                .axeInject()
                .axeRun('body', {
                    rules: {}
                })
                .end();
        }*/
}
