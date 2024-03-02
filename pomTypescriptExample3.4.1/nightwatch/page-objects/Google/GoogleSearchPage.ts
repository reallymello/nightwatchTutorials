import { EnhancedPageObject, NightwatchAPI, PageObjectModel } from 'nightwatch';

const googleSearchPageCommands = {
  pressEnter(this: GoogleSearchPage) {
    this.perform(function (this: NightwatchAPI) {
      const actions = this.actions({ async: true });

      return actions.keyDown(this.Keys['ENTER']).keyUp(this.Keys['ENTER']);
    });
  },
};

const googleSearchPage: PageObjectModel = {
  url: 'https://google.com/ncr',
  commands: [googleSearchPageCommands],
  elements: { searchInput: 'textarea[name=q]' },
};

export default googleSearchPage;

export interface GoogleSearchPage
  extends EnhancedPageObject<
    typeof googleSearchPageCommands,
    typeof googleSearchPage.elements
  > {}
