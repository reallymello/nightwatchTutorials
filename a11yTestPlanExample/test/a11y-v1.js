// nightwatch --test "test/a11y-v1.js"

module.exports = {
  'Run all accessibility assertions': (browser) => {
        browser.page.news().navigate()
            .axeInject()
            .axeRun('body')
            .end();
  },
};
