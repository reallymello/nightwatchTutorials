import 'nightwatch';
import { CustomPageObjects } from './page-objects';

declare module 'nightwatch' {
  export interface NightwatchCustomPageObjects extends CustomPageObjects {}
  export interface NightwatchCustomAssertions {
    customAssertionHere: (
      itemName: string,
      exQty: number
    ) => Awaitable<NightwatchAPI, NightwatchAssertionsResult<string>>;
  }
  export interface NightwatchCustomCommands {
    exampleCustomCommandHere(): NightwatchClient;
  }
}
