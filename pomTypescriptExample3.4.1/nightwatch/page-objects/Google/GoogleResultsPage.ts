import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const googleResultsPageCommands = {};

const googleResultsPage = {
  commands: [googleResultsPageCommands],
  elements: {
    searchResultsDiv: '#rso',
  },
  sections: {
    someSection: {
      selector: "#someSectionSelector",
      commands: [{
        clickOnSomeThing(this: EnhancedPageObject) {
          this.click('@searchResultsDiv');
        }
      }]
    }
  }
} satisfies PageObjectModel;

export default googleResultsPage;

export interface GoogleResultsPage
  extends EnhancedPageObject<
    typeof googleResultsPageCommands,
    typeof googleResultsPage.elements,
    typeof googleResultsPage.sections
  > {}
