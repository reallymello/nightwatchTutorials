import { NightwatchClient, NightwatchExpectResult } from 'nightwatch';

export default class WaitForLoadScreen {
  async command(this: NightwatchClient, expectedTitle: string) {
    await browser.waitUntil(async () => {
      const title = await browser.execute(function () {
        return document.title;
      });
      console.log(title);
      return title === expectedTitle;
    });
  }
}
