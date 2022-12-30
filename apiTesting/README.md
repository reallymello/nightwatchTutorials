# Nightwatch API Testing Tutorial

This tutorial shows how to use the [Nightwatch API Testing Plugin](https://github.com/nightwatchjs/nightwatch-plugin-apitesting) for testing REST APIs. This is convenient because you can have your API tests in the same project as your Selenium UI test automation instead of a separate SuperTest or Postman project for example.

## Installation

Run `npm install` to bring in the required dependencies to run this project.

### Manual Installation

*You only need to do this on new projects from scratch. This repository already did this for you.*

If you are starting a project from scratch you'll need to add `@nightwatch/apitesting` as a plugin.

1. Run `npm i nightwatch @nightwatch/apitesting --save-dev`
2. In `nightwatch.conf.js` append to the plugins section the api testing plugin

```js
// nightwatch.conf.js
{
  "plugins": [
    "@nightwatch/apitesting"      
  ]
}
```
3. If your project is only running API tests you can shut off launching the browser by adding/changing these settings in your run profile also in `nightwatch.conf.js`

```js
// nightwatch.conf.js
{
  "start_session": false,
  "webdriver": {
    "start_process": false
  }
}  
```
