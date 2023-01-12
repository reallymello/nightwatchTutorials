"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleTest = {
    'Google search test': (browser) => {
        const google = browser.page.googlePage();
        google
            .navigate()
            .assert.titleEquals('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch');
        google
            .clickSearch()
            .expect.element('body')
            .text.to.contain('Nightwatch.js | Node.js powered End-to-End testing framework');
        browser.end();
    },
    'Will find custom axe command types': (browser) => {
        const google = browser.page.googlePage();
        google
            .navigate()
            .assert.titleEquals('Google')
            .axeInject()
            .axeRun('body', {
            rules: {
                'color-contrast': {
                    enabled: false,
                },
                region: {
                    enabled: false,
                },
                'aria-required-attr': {
                    enabled: false,
                },
                'aria-valid-attr-value': {
                    enabled: false,
                },
            },
        });
    },
};
exports.default = googleTest;
