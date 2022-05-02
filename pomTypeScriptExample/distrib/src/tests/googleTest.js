"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const googleTest = {
    'Google search test': function (browser) {
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
};
exports.default = googleTest;
