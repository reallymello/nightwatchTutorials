import { EnhancedPageObject, PageElements, PageObjectModel } from "nightwatch";

const elements: PageElements = {
  hello: "#world",
  submit: {
    selector: "[name='btnK']",
    locateStrategy: "css selector",
  },
};

const helloWorld: PageObjectModel = {
  url(this: EnhancedPageObject) {
    return `${this.api.launch_url}`;
  },
  elements: elements,
  commands: [
    {
      waitForNothing(this: HelloWorldPage) {
        browser.pause(100);
        return this.waitForElementNotPresent("#doesntExist");
      },
      waitForSomething(this: HelloWorldPage) {
        browser.pause(100);
        return this.waitForElementPresent("@submit");
      },
    },
  ],
};

export default helloWorld;
export interface HelloWorldPage
  extends EnhancedPageObject<
    typeof helloWorld.commands[0],
    typeof helloWorld.elements,
    {}
  > {}
