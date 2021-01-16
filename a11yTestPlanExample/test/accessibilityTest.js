module.exports = {
    before: function (browser) {
        browser.page.news()
            .navigate();
        browser.page.news()
            .axeInject();
    },
    after: function (browser) {
        browser.end();
    },
    'Page should have descriptive title': function (browser) {
        browser.page.news()
            .assert.title('Welcome to CityLights! [Inaccessible News Page]');
    },
    'Main logo has alt text': function (browser) {
        browser.page.news()
            .axeRun("img[src$='top_logo.gif']", {
                runOnly: ['image-alt']
            });
    },
    'News page has accessible headers': function (browser) {
        browser.page.news()
            .axeRun('body', {
                runOnly: ['empty-heading', 'heading-order', 'page-has-heading-one',
                             'p-as-heading']
            });
    },
    'News page is keyboard friendly': function (browser) {
        browser.page.news()
            .axeInject()
            .axeRun('body', {
                runOnly: ['scrollable-region-focusable', 'accesskeys', 'region', 'skip-link', 'tabindex']
            });
    }
}
