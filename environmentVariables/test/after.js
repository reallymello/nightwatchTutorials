module.exports = {
    beforeEach: function (browser) {
        browser.page.login()
            .navigate()
            .loginAs(
                browser.globals.username,
                browser.globals.password);
    },
    after: function (browser) {
        browser.end();
    },
    "Correct name appears on user profile page": function (browser) {
        // Given I am on the profile page.
        browser.page.profile().expect.element('@pageTitle')
            .text.to.endWith(
                `${browser.globals.companyName} | User Profile`);

        // Then my profile should show the correct name
        browser.page.profile().expect
            .element('@name')
            .text.to.equal(browser.globals.profile.name);
    },
    "Correct T-Shirt size preference is displayed": function (browser) {
        // Given I am on the profile page.
        browser.page.profile().expect.element('@pageTitle')
            .text.to.endWith(
                `${browser.globals.companyName} | User Profile`);

        // Then my profile should have the correct shirt size
        browser.page.profile().expect.element('@shirtSize')
            .text.to.equal(browser.globals.profile.shirtSize);
    }
}
