exports.assertion = function (expectedCount, table, whereClause, msg) {
    let actual = -1;

    this.formatMessage = function () {
        const message = `Testing if the record count (${whereClause}) ${this.negate ? 'doesn\'t equal %s' : 'equals %s'}`;

        return {
            message,
            args: [`${expectedCount}`]
        }
    };

    /**
     * Returns the expected value of the assertion which is displayed in the case of a failure
     *
     * @return {string}
     */
    this.expected = function () {
        return this.negate ? `not ${expectedCount}` : `${expectedCount}`;
    };

    /**
     * Given the value, the condition used to evaluate if the assertion is passed
     * @param {*} value
     * @return {Boolean}
     */
    this.evaluate = function (value) {
        return value === expectedCount;
    };

    /**
     * Called with the result object of the command to retrieve the value which is to be evaluated
     *
     * @param {Object} result
     * @return {*}
     */
    this.value = function (result) {
        actual = result.value;
        return actual;
    };

    /**
     * When defined, this method is called by the assertion runner with the command result, to determine if the
     *  value can be retrieved successfully from the result object
     *
     * @param result
     * @return {boolean|*}
     */
    this.failure = function (result) {
        return result === false || result && result.status === -1;
    };

    /**
     * When defined, this method is called by the assertion runner with the command result to determine the actual
     *  state of the assertion in the event of a failure
     *
     * @param {Boolean} passed
     * @return {string}
     */
    this.actual = function (passed) {
        return passed ? `record count was equal to '${expectedCount}'` : `${actual}`;
    };

    /**
     * The command which is to be executed by the assertion runner; Nightwatch api is available as this.api
     * @param {function} callback
     */
    this.command = function (callback) {
        const sql = require('mssql')
        const config = {
            user: this.api.globals.dbUsername,
            password: this.api.globals.dbPassword,
            server: this.api.globals.dbAddress,
            port: this.api.globals.dbPort,
            database: this.api.globals.dbName,
            encrypt: true,
            options: {
                enableArithAbort: true
            }
        };
        let query = `SELECT COUNT(*) as record_count FROM ${table}`;
        if (whereClause) {
            query += ` WHERE ${whereClause}`;
        }

        sql.connect(config).then(() => {
            return sql.query(query)
        }).then(resultSet => {
            sql.close();
            callback({
                value: resultSet.recordset[0].record_count
            })
        }).catch(err => {
            sql.close();
            callback({
                value: `There was an exception connecting to the database: ${err}`
            })
        })
    };

};
