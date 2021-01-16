/*
Rule Explanations
https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
https://dequeuniversity.com/rules/axe/4.1
*/
module.exports = {
    'Run everything except contrast and region': function (browser) {
        browser.page.news()
            .navigate()
            .axeInject()
            .axeRun('body', {
                runOnly: ['color-contrast', 'image-alt']
            })
            .end();
    }
}
