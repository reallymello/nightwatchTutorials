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
  // You can override or add your own types in this way here
  // export interface NightwatchCommonAssertions {
  //   titleEquals(expected: string, message?: string): NightwatchAPI;
  // }
}
