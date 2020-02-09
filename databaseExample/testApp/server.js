var express = require('express');
var app = express();
var sql = require("mssql");
const port = 8080;
const config = {
    user: 'sa',
    password: 'ThisIsAStrongP@assword!SortOf',
    server: 'localhost',
    database: 'nightwatchDb',
    encrypt: true,
    options: {
        enableArithAbort: true
    }
};

app.get('/', function (req, res) {
    res.send('hi there');
});

app.get('/addPerson/:firstName/:lastName', function (req, res) {
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;

    sql.connect(config, function (err) {

        if (err) console.log(err);

        var request = new sql.Request();

        let query = `INSERT INTO people (first_name, last_name) VALUES ('${firstName}', '${lastName}')`;
        request.query(query, function (err, recordset) {

            if (err) {
                res.send(err)
            }

            res.send(`Added ${firstName} ${lastName}`);
        });
    });
});

app.get('/removePerson/:firstName/:lastName', function (req, res) {
    let firstName = req.params.firstName;
    let lastName = req.params.lastName;

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        //INSERT INTO people (first_name, last_name) VALUES ('${firstName}', '${lastName}')
        let query = `DELETE FROM people WHERE first_name = '${firstName}' AND last_name = '${lastName}'`;
        request.query(query, function (err, recordset) {

            if (err) {
                res.send(query + " " + err)
            }
            // send records as a response
            //res.send(recordset);
            res.send(`Removed ${firstName} ${lastName}`);
        });
    });
});

app.get('/reset', function (req, res) {
    sql.connect(config, function (err) {

        if (err) console.log(err);

        var request = new sql.Request();

        let query = `DELETE FROM people WHERE person_id > 3`;
        request.query(query, function (err, recordset) {

            if (err) {
                res.send(query + " " + err)
            }
            res.send(`Reset database to default seed data.`);
        });
    });
});

var server = app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
