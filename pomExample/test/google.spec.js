module.exports = {
    'Google search test': function (browser) {
        let google = browser.page.google();

        google.navigate()
            .assert.title('Google')
            .assert.visible('@searchBar')
            .setValue('@searchBar', 'nightwatch')
            .click('@submit');
    }
}
