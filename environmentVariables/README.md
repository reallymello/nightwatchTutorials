# Nightwatch.js Global Environment Variables Tutorial
This is the source code for the [Nightwatch Environment Globals](https://youtu.be/gJvAbGYP-H8) tutorial on the [reallyMello](https://www.youtube.com/c/reallymello) YouTube channel.

This project contains a sample application for the "reallyMello Shirt Company" and tests written in Nightwatch in order to demonstrate why and how to use Nightwatch global environment variables instead of hardcoding text strings in your tests.

See [davidmello.com/nightwatch-page-object-model-with-commands/](https://www.davidmello.com/nightwatch-page-object-model-with-commands/) for the full tutorial.

## Starting the test app
1) Clone the repository
2) Run *npm install* from the command line in the root folder.
3) You can start the application in either dev or production mode
 - To use dev mode type `npm run dev`
 - To use production mode type `npm start`

*Note: This is only a test app and the login page is merely a facade and the pages behind it aren't checked for session. Credentials and so on are stored in a file to keep things simple. Don't do this with a real app.*
 
## Running the Nightwatch tests
For the tutorial the Nightwatch tests are broken into a before.js and after.js file.

You can run before.js using `nightwatch "./test/before.js`

This test will pass when running the sample application in dev mode only to illustrate why this is a bad pattern because it's logic is hardcoded to the dev environment.

You can run after.js with the `-e` environment flag to inform the test which environment to run against.

To run after.js against dev mode use `nightwatch -e dev "./test/after.js"` and use `nightwatch -e production "./test/after.js"` to have the tests run against production.