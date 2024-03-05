import { EnhancedPageObject, PageObjectModel } from 'nightwatch';

const googleResultsPageCommands = {};

const googleResultsPage = {
  commands: [googleResultsPageCommands],
  elements: {
    searchResultsDiv: '#rso',
  },
} satisfies PageObjectModel;

export default googleResultsPage;

export interface GoogleResultsPage
  extends EnhancedPageObject<
    typeof googleResultsPageCommands,
    typeof googleResultsPage.elements
  > {}
