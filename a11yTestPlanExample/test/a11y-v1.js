module.exports = {
    'Run all accessibility assertions': function (browser) {
        browser.page.news()
            .navigate()
            .axeInject()
            .axeRun('body')
            .end();
    }
}
