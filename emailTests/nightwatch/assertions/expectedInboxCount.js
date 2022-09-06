exports.assertion = function (expectedCount, inboxId, searchValue = '') {
  let actual = -1;

  this.formatMessage = function () {
    let message = `Testing if inbox id "${inboxId}" ${
      this.negate ? 'does not contain' : 'contains'
    } exactly %s email${expectedCount > 1 ? 's' : ''}`;

    if (searchValue !== '') {
      message += ` with a subject, to_email, or to_name matching search term ${searchValue}`;
    }

    return {
      message,
      args: [`${expectedCount}`],
    };
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
    return result === false || (result && result.status === -1);
  };

  /**
   * When defined, this method is called by the assertion runner with the command result to determine the actual
   *  state of the assertion in the event of a failure
   *
   * @param {Boolean} passed
   * @return {string}
   */
  this.actual = function (passed) {
    return passed
      ? `record count was equal to '${expectedCount}'`
      : `${actual}`;
  };

  /**
   * The command which is to be executed by the assertion runner; Nightwatch api is available as this.api
   * @param {function} callback
   */
  this.command = function (callback) {
    const superagent = require('superagent');
    superagent
      .get(
        `https://mailtrap.io/api/v1/inboxes/${inboxId}/messages?search=${searchValue}`
      )
      .set('Api-Token', '72e6583104bd1ed04488763de3801f21')
      .set('Content-type', 'application/json')
      .end((err, res) => {
        if (err) {
          callback({ value: err });
        } else {
          callback({ value: JSON.parse(res.text).length });
        }
      });
  };
};
