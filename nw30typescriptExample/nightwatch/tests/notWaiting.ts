import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import { DropDownPage } from '../page-objects/dropDownPage';

const home: NightwatchTests = {
  'Not waiting': async (browser: NightwatchBrowser) => {
    const dropDownPage: DropDownPage = browser.page.dropDownPage();

    dropDownPage.navigate();

    dropDownPage.waitForLoadScreen(10000);

    dropDownPage.expect.element('@dropDown').value.equal('');

    dropDownPage.problemCommand('Not the title I was expecting');
    // browser.waitUntil(async () => {
    //   const title = await browser.execute(function () {
    //     return document.title;
    //   });
    //   console.log(title);
    //   return title === 'Not the title I was expecting';
    // });

    dropDownPage
      .selectOption('Option 2')
      .expect.element('@dropDown')
      .value.equal('2');
  },
};

export default home;
