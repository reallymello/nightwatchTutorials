import { EnhancedPageObject, NightwatchTests } from "nightwatch";
import { HelloWorldPage } from "../pages/helloWorldPage";

const home: NightwatchTests = {
  "Google title test": () => {
    browser.url("https://google.com/ncr").assert.title("Google");
  },
  "Test commands": () => {
    const helloWorld: EnhancedPageObject<HelloWorldPage> =
      browser.page.helloWorldPage();

    helloWorld.navigate().waitForNothing().waitForSomething();
    browser.end();
  },
};

export default home;
