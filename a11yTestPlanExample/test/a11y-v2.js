/*
Rule Explanations
https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
https://dequeuniversity.com/rules/axe/4.1
*/

// nightwatch --test "test/a11y-v2.js"
module.exports = {
  'Run everything except contrast and region': (browser) => {
    browser.page
      .news()
      .navigate()
      .axeInject()
      .axeRun('body', {
        rules: {
          'color-contrast': {
            enabled: false,
          },
          region: {
            enabled: false,
          },
        },
      })
      .end();
  },
};
