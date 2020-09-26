# Tutorial How to run Nightwatch.js tests in SauceLabs
This is the source code for the [How to run Nightwatch.js tests in SauceLabs](https://www.youtube.com/playlist?list=PLLS_Ef55N6hmkt3-JlW40GAGpXSlp8t_D) tutorial on the [reallyMello](https://www.youtube.com/c/reallymello) YouTube channel.

This code contains a simple automated test to show how to connect Nightwatch and SauceLabs for text execution in their cloud-based selenium grid.

It makes use of the npm package *saucelabs* for running Nightwatch against the the SauceLabs REST API and the package [nightwatch-saucelabs-endsauce](https://www.npmjs.com/package/nightwatch-saucelabs-endsauce) for saving the test results to SauceLabs.

See [https://www.davidmello.com/software-testing](https://www.davidmello.com/software-testing) for the full tutorial.

## Installation and use
1) Clone the repository
2) Run *npm install* from the command line in the root folder.
3) Type *nightwatch -v*. If the nightwatch version doesn't print type *npm install nightwatch -g*
4) Export two environment variables for {SAUCE_USERNAME} and {SAUCE_ACCESS_KEY} which can be found in the *Account > User Settings* section of SauceLabs. Alternately, replace those two placeholders in the nightwatch.json file in the project's root directory with those same credentials. Also ensure the *sauce_region* value matches for your account (this example uses us-west-1).
4) Execute the test by running *nightwatch* in the root folder.

Once the test completes you should be able to see the video of the result when you login to the Automated test results section of the SauceLabs website for your account along with the passing status of the test.
