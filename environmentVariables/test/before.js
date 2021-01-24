module.exports = {
    beforeEach: function (browser) {
        browser.page.login()
            .navigate()
            .loginAs("nightwatch", "password");
    },
    after: function (browser) {
        browser.end();
    },
    "Correct name appears on user profile page": function (browser) {
        // Given I am on the profile page.
        browser.page.profile().expect.element('@pageTitle')
            .text.to.endWith('reallyMello Shirt Co. (dev) | User Profile');

        // Then my profile should show the correct name
        browser.page.profile().expect
            .element('@name').text.to.equal("Janna Levtus");
    },
    "Correct T-Shirt size preference is displayed": function (browser) {
        // Given I am on the profile page.
        browser.page.profile().expect.element('@pageTitle')
            .text.to.endWith('reallyMello Shirt Co. (dev) | User Profile');

        // Then my profile should have the correct shirt size
        browser.page.profile().expect.element('@shirtSize')
            .text.to.equal("Large");
    }
}
