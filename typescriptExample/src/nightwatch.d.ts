import {
  EnhancedPageObject,
  NightwatchBrowser,
  NightwatchElement,
} from "nightwatch";

declare global {
  const browser: NightwatchBrowser;
  const element: typeof NightwatchElement;
}

declare module "nightwatch" {
  export interface NightwatchCommonAssertions {
    /**
     * Checks if the page title equals the given value.
     * @deprecated in Nightwatch 2.0 and will be removed from future versions.
     * @see assert.titleEquals()
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.title("Nightwatch.js");
     *    };
     * ```
     */
    title(expected: string, message?: string): NightwatchAPI;

    /**
     * Checks if the page title equals the given value.
     * @since 2.0
     * ```
     *    this.demoTest = function (client) {
     *      browser.assert.titleEquals("Nightwatch.js");
     *    };
     * ```
     */
    titleEquals(expected: string, message?: string): NightwatchAPI;
  }
}
