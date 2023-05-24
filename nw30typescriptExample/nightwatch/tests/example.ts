import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import { DropDownPage } from '../page-objects/dropDownPage';

const home: NightwatchTests = {
  'Can select option': (browser: NightwatchBrowser) => {
    const dropDownPage: DropDownPage = browser.page.dropDownPage();

    dropDownPage.navigate();

    dropDownPage.waitForLoadScreen(10000);

    dropDownPage.expect.element('@dropDown').value.equal('');

    dropDownPage
      .selectOption('Option 2')
      .expect.element('@dropDown')
      .value.equal('2');
  },
};

export default home;
