# Nightwatch API Testing Tutorial

This tutorial shows how to use the [Nightwatch API Testing Plugin](https://github.com/nightwatchjs/nightwatch-plugin-apitesting) for testing REST APIs. This is convenient because you can have your API tests in the same project as your Selenium UI test automation instead of a separate SuperTest or Postman project for example.

This example is used in the API testing tutorial article (API Testing with Nightwatch and SuperTest)[https://www.davidmello.com/api-testing-with-nightwatch-supertest/]

The Nightwatch plugin has some advantages over separately importing SuperTest in that it is more nicely integrated with the Nightwatch reporting engine and provides an express mockserver.

## Examples

- Remote tests against the [Swagger PetStore]('https://petstore.swagger.io) public test API
  [/nightwatch/tests/petStore.ts](/apiTesting/nightwatch/tests/petStore.ts)

- Remote tests against the [Restful Booker](https://restful-booker.herokuapp.com) public test API
  [/nightwatch/tests/restfulBooker.ts](/apiTesting/nightwatch/tests/restfulBooker.ts)

- Local tests against the [Restful Booker](https://github.com/mwinteringham/restful-booker) API code run locally (to simulate local dev/test workflows)
  [/nightwatch/tests/restfulBooker.ts](/apiTesting/nightwatch/tests/restfulBookerLocal.ts)

More test APIs can be found on [https://www.davidmello.com/best-websites-for-practicing-test-automation/](https://www.davidmello.com/best-websites-for-practicing-test-automation/)

## Installation

Run `npm install` to bring in the required dependencies to run this project.

### Manual Installation

_You only need to do this on new projects from scratch. This repository already did this for you._

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

4. Optionally, for type support, you can use the ApiTest type inside `./nightwatch/types/nightwatch.d.ts`

This would allow you to have intellisense when working with the supertest object if you provide the type in your test similar to

```js
'GET something': async ({ supertest }: ApiTest) => {
    // ...
}
```

Include that in your `tsconfig.json` paths

```js
// tsconfig.json
"paths": {
    "compilerOptions": {
        // ...
        "paths": {
            "nightwatch": ["./types/nightwatch.d.ts"]
        }
    }
}
```

## Running the API tests

Use `npx nightwatch` to run your Nightwatch TypeScript API tests.

```bash
npx nightwatch

 Running:  default: petStore.ts

┌ ────────────────── √  default: petStore.ts  ─────────────────────────────────────┐
│                                                                                  │
│                                                                                  │
│    [Pet Store] Test Suite                                                        │
│    ────────────────────────────────────────────                                  │
│                                                                                  │
│    – can GET count of sold inventory                                             │
│    √ Passed [ok]: .get('/store/inventory/').expect(200) ok                       │
│    √ Passed [ok]: .get('/store/inventory/').expect('Content-Type', /json/) ok    │
│    √ Expected 3  to be greaterThan(+0):                                          │
│    √ default: petStore.ts [Pet Store] can GET count of sold inventory (338ms)    │
│    – can POST a pet to the store                                                 │
│    √ Passed [ok]: .post('/pet').expect(200) ok                                   │
│    √ Passed [ok]: .post('/pet').expect('Content-Type', /json/) ok                │
│    √ Expected 31337  to equal(31337):                                            │
│    √ Expected 'available'  to equal('available'):                                │
│    √ default: petStore.ts [Pet Store] can POST a pet to the store (261ms)        │
│    – can POST order to the pet store                                             │
│    √ Passed [ok]: .post('/store/order').expect(200) ok                           │
│    √ Passed [ok]: .post('/store/order').expect('Content-Type', /json/) ok        │
│    √ Expected 82852063  to be greaterThan(+0):                                   │
│    √ Expected 1  to equal(1):                                                    │
│    √ Expected 'placed'  to equal('placed'):                                      │
│    √ default: petStore.ts [Pet Store] can POST order to the pet store (277ms)    │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘

  ✨ PASSED. 12 total assertions (4.068s)
```
