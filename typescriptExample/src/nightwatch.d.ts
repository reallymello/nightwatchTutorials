import {
  EnhancedPageObject,
  NightwatchBrowser,
  NightwatchElement,
} from "nightwatch";

declare global {
  const browser: NightwatchBrowser;
  const element: typeof NightwatchElement;
}
