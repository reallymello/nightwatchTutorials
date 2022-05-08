# Visual Regression Testing with SauceLabs and Nightwatch.js examples

This code contains a visual regression tests that run against SauceLabs using Nightwatch js.

These tests use the [nightwatch-saucelabs-visual](https://www.npmjs.com/package/nightwatch-saucelabs-visual) plugin and [nightwatch-saucelabs-endsauce](https://www.npmjs.com/package/nightwatch-saucelabs-endsauce) custom commands to allow Nightwatch to run the test automation against SauceLabs Visual (fka screener) and use visual assertions in the tests.

## Installation and use

_These tests require a SauceLabs subscription with SauceLabs Visual on it_

1. Clone the repository
2. Run `npm install` from the command line in the root folder.
3. Run `npm install nightwatch -g`
4. Export environment variables named `{SAUCE_USERNAME}`, `{SAUCE_ACCESS_KEY}`, and `{SAUCE_VISUAL_API_KEY}`, holding their respective values, which can be found in the `Account > User Settings` section of SauceLabs and inside your user profile in the SauceLabs Visual Portal. Alternately, replace those two placeholders in the `nightwatch.config.js` file in the project's root directory with those same values. Also ensure the `sauce_region` value in the config file matches for your account (this example uses us-west-1).
5. Execute the test by running `nightwatch` in the root folder.

The first time you execute the tests they should fail on the visual assertion because there is no baseline. After the tests fail, log in to the SauceLabs Visual portal and accept the baseline.

After, some tests may still fail in these examples as the example pages have logic to randomly change their visual appearance as a good way to check that this works finding visual changes.

Details of the failures will appear in the SauceLabs visual portal.
