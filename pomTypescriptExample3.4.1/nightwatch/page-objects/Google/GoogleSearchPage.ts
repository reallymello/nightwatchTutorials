import {
  EnhancedPageObject,
  NightwatchAPI,
  PageObjectModel,
  SectionProperties,
} from 'nightwatch';

const googleSearchPageCommands = {
  pressEnter(this: GoogleSearchPage) {
    this.perform(function (this: NightwatchAPI) {
      const actions = this.actions({ async: true });

      return actions.keyDown(this.Keys['ENTER']).keyUp(this.Keys['ENTER']);
    });
  },
};

const googleSearchPageSections = {
  lowerBanner: {
    selector: '[role="contentinfo"]',
    commands: {
      clickHowSearchWorks(this: any) {
        return this.click('@thirdLink');
      },
    },
    elements: {
      firstLink: {
        selector: 'a',
        index: 0,
      },
      thirdLink: {
        selector: 'a',
        index: 2,
      },
    },
  },
};

const googleSearchPage = {
  url: 'https://google.com/ncr',
  commands: [googleSearchPageCommands],
  elements: { searchInput: 'textarea[name=q]' },
  sections: googleSearchPageSections,
} satisfies PageObjectModel;

export default googleSearchPage;

export interface GoogleSearchPage
  extends EnhancedPageObject<
    typeof googleSearchPageCommands,
    typeof googleSearchPage.elements,
    typeof googleSearchPageSections
  > {}
