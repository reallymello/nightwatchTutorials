# Tutorial How to integrate TestRail with Nightwatch.js tests
This is the source code for the [How to integrate Testrail with NightwatchJS automated tests](https://youtu.be/p01y9brwpBc) tutorial on the [reallyMello](https://www.youtube.com/c/reallymello) YouTube channel.

This code contains a simple automated test to show how to integrate TestRail with Nightwatch for the test results to post automatically to your test case management system..

It makes use of the npm package [nightwatch-testrail-updater](https://www.npmjs.com/package/nightwatch-testrail-updater) for posting the test results to TestRail.

See [https://www.davidmello.com/testrail-with-nightwatchjs/](https://www.davidmello.com/testrail-with-nightwatchjs/) for the full tutorial.

## Installation and use
1) Clone the repository
2) Run *npm install* from the command line in the root folder.
3) Type *nightwatch -v*. If the nightwatch version doesn't print type *npm install nightwatch -g*
4) Export two environment variables for *TESTRAIL_USERNAME* and *TESTRAIL_API_KEY* from your TestRail account.
5) In TestRail create a new run with 3 test cases matching the ones inside the testRailTest.js example.
6) In nightwatch.json change the value for TestRail host and RunID to match the values in your TestRail deployment and RunID.
7) In testRailTest.js replace the browser.testId placeholder values with the ones you created in TestRail.
8) Execute the test by running *nightwatch* in the root folder.

When the test completes you should see the pass/fail results along with the test step log in the TestRail run.
