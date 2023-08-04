import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import '@nightwatch/apitesting';

const browserAndApiTest: NightwatchTests = {
  /**
   * This is an example of using the Nightwatch browser API and SuperTest API in the same test
   * The test navigates to the Swagger docs page (for PetStore) using a browser, retrieves the
   * text off the Swagger docs page to the PetStore inventory, then uses that text for the
   * GET request path in the SuperTest call.
   * @param param0
   */
  'Can make browser and API requests in the same test': async ({
    supertest,
  }: NightwatchBrowser) => {
    // Navigate to the Swagger docs for the PetStore API
    await browser.navigateTo('https://petstore.swagger.io/');

    // Get the text for the intentory endpoint and save to the "getPath" variable
    const getPath = await browser.getText('[href="#/store/getInventory"]');

    // Call SuperTest with the path we retrieved from the brower
    await supertest
      .request('https://petstore.swagger.io/v2')
      .get(getPath /*'/store/inventory/'*/)
      .expect(200)
      .expect('Content-Type', /json/)
      .then((response) => {
        expect(response.body.sold).to.be.greaterThan(0);
      });
  },
};

export default browserAndApiTest;
