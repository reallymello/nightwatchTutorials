import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const dropDownPageCommands = {
  selectOption(this: DropDownPage, value: string) {
    return this.setValue('@dropDown', value);
  },
};

const dropDownPage: PageObjectModel = {
  url: 'http://the-internet.herokuapp.com/dropdown',
  commands: [dropDownPageCommands],
  elements: {
    dropDown: {
      selector: '#dropdown',
    },
  },
};

export default dropDownPage;

export interface DropDownPage
  extends EnhancedPageObject<
    typeof dropDownPageCommands,
    typeof dropDownPage.elements
  > {}
