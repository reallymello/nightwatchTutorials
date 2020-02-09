# Nightwatch Database Assertions examples with MSSQL

This suite contains example tests that use the nightwatch-mssql-assertions package to write Nightwatch.js test assertions against Microsoft SQL (MSSQL databases). This can be useful when you need to verify actions performed by browser/selenium/Nightwatch test automation causes the desired changes in the backend. 

## Prerequisites

### Docker
- Docker (https://hub.docker.com/?overlay=onboarding)
- Npm (https://nodejs.org/)

The example repository comes with a docker container containing a MSSQL database instance and a **people** table ready to go with 3 entries.

1. Navigate to /databaseExample directory in a command prompt
2. Ensure docker is installed
3. From the command prompt run **docker image build --tag nightwatchsqldb:1 .**
4. Run **docker container run -p 1433:1433 --rm --name nightwatchsqlcontainer nightwatchsqldb:1**

At this point you will have a running instance of MSSQL preseeded with data ready to run the tests against. Keep the container running while conducting the tests.

### Example test server

The tests use a simple Node API to add and remove records to allow for some more interesting test case examples. This will also need to be started to run the tests against.

1. In a separate command prompt navigate to /testApp
2. Run **npm install**
3. Run **node server.js**

## Test Configuration

Nightwatch.json has a globals section that nightwatch-mssql-assertions uses to build a database connection string with for connectivity. It is preconfigured to work with the docker container, but can be modified to point to your own database if you use it on your own test projects outside of the example.

## Running the Nightwatch mssql database tests

1. In a seperate command prompt navigate to **/databaseExample**
2. Run **npm install**
3. Run **nightwatch**

The tests should begin executing.

```sh
Running:  Verify John Wick count

√ Testing if the record count (first_name = 'John' AND last_name = 'Wick') equals 0 (88ms)
√ Testing if element <body> contains text 'Added john wick' (27ms)
√ Testing if the record count (first_name = 'John' AND last_name = 'Wick') equals 3 (89ms)
√ Testing if element <body> contains text 'Removed john wick' (21ms)
√ Testing if the record count (first_name = 'John' AND last_name = 'Wick') equals 0 (93ms)
√ Testing if the record count (first_name = 'Jane' AND last_name = 'Doe') equals 1 (86ms)

OK. 6 assertions passed. (512ms)
```

The assertion syntax is recordCountIs(expectedCount, tableName, whereClause | null)

```js
let tableName = 'tableNameHere';
let whereClause = "myColumn = 'someValue'";
browser
    .assert
    .recordCountIs(2, tableName, whereClause)
```
If the where clause is left null it will return the count of all the rows in the specified table.

*The queries are not parameterized and could be subject to SQL injection. Assumed to be used ethically in test environments only*

For more information see [https://www.davidmello.com/tags/nightwatchjs](https://www.davidmello.com/tags/nightwatchjs) or the [reallyMello YouTube channel](https://www.youtube.com/playlist?list=PLLS_Ef55N6hmkt3-JlW40GAGpXSlp8t_D)