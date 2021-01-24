/*
Rule Explanations
https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
https://dequeuniversity.com/rules/axe/4.1
*/
module.exports = {
    'Run only color contrast and alt image': function (browser) {
        browser.page.news()
            .navigate()
            .axeInject()
            .axeRun('body', {
                runOnly: ['color-contrast', 'image-alt']
            })
            .end();
    }
}
