module.exports = {
    'Google search test': function (browser) {
        let google = browser.page.google();

        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .setValue('@searchBar', browser.Keys.ENTER)
            .assert.containsText('body', 'Nightwatch.js | Node.js powered End-to-End testing framework')
            .end();
    }
}
