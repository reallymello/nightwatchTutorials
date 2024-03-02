import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const googleResultsPageCommands = {};

const googleResultsPage: PageObjectModel = {
  commands: [googleResultsPageCommands],
  elements: {
    searchResultsDiv: '#rso',
  },
};

export default googleResultsPage;

export interface GoogleResultsPage
  extends EnhancedPageObject<
    typeof googleResultsPageCommands,
    typeof googleResultsPage.elements
  > {}
