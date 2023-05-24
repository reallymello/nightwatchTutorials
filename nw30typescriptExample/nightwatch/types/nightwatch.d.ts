import 'nightwatch';
import { DropDownPage } from '../page-objects/dropDownPage';

declare module 'nightwatch' {
  export interface NightwatchCustomCommands {
    waitForLoadScreen(maxWaitInMs: number): Awaitable<this, null>;
  }
  export interface NightwatchCustomPageObject {
    dropDownPage(): DropDownPage;
  }
}
