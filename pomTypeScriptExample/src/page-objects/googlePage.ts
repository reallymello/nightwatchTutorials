import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const googleCommands = {
  clickSearch(this: GooglePage) {
    return this.waitForElementVisible('@submit', 10000)
      .click('@submit')
      .waitForElementNotPresent('@submit');
  },
};

const googlePage: PageObjectModel = {
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

export default googlePage;

export interface GooglePage
  extends EnhancedPageObject<
    typeof googleCommands,
    typeof googlePage.elements
  > {}
