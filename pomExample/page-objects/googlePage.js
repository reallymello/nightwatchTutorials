const googleCommands = {
  clickSearch() {
    return this.waitForElementVisible('@submit', 10000)
      .click('@submit')
      .waitForElementNotPresent('@submit');
  },
};

module.exports = {
  url: 'http://www.google.com',
  commands: [googleCommands],
  elements: {
    searchBar: {
      selector: 'input[type=text]',
    },
    submit: {
      selector: 'input[name=btnK]',
    },
  },
};
