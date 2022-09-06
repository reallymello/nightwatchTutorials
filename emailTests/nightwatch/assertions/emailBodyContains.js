exports.assertion = function (expectedText, inboxId, searchValue = '') {
  let actual = -1;

  this.formatMessage = function () {
    searchMessage = '';
    if (searchValue !== '') {
      searchMessage = ` with a subject, to_email, or to_name matching search term "${searchValue}"`;
    }
    let message = `Testing if first email${searchMessage} in inbox id "${inboxId}" ${
      this.negate ? 'does not contain' : 'contains'
    } text %s in the message body`;

    return {
      message,
      args: [`${expectedText}`],
    };
  };

  /**
   * Returns the expected value of the assertion which is displayed in the case of a failure
   *
   * @return {string}
   */
  this.expected = function () {
    return this.negate ? `not ${expectedText}` : `${expectedText}`;
  };

  /**
   * Given the value, the condition used to evaluate if the assertion is passed
   * @param {*} value
   * @return {Boolean}
   */
  this.evaluate = function (value) {
    return value.includes(expectedText);
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
      ? `first email had text '${expectedText}' in the message body`
      : actual /*`most recent message body did not include '${expectedText}'`*/;
  };

  /**
   * The command which is to be executed by the assertion runner; Nightwatch api is available as this.api
   * @param {function} callback
   */
  this.command = async (callback) => {
    const superagent = require('superagent');
    let messages = await superagent
      .get(
        `https://mailtrap.io/api/v1/inboxes/${inboxId}/messages?search=${searchValue}`
      )
      .set('Api-Token', '72e6583104bd1ed04488763de3801f21')
      .then((res) => {
        return JSON.parse(res.text);
      })
      .catch((err) => {
        console.err(err.message);
        return [];
      });

    if (messages.length > 0) {
      await superagent
        .get(`https://mailtrap.io/${messages[0].txt_path}`)
        .set('Api-Token', '72e6583104bd1ed04488763de3801f21')
        .then((res) => {
          callback({ value: res.text });
        })
        .catch((err) => {
          console.err(err.message);
          callback({ value: err, status: -1 });
        });
    } else {
      callback({ value: '' });
    }
  };
};
