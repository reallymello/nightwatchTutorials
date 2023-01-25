/**
 * These tests briefly show how it is possible to load a local app into SuperTest instead of making
 * calls to a remotely deployed one.
 */

import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import '@nightwatch/apitesting';

const server = require('../../restfulBooker/restful-booker/app');

const bookerTests: NightwatchTests = {
  'Can GET ping': async ({ supertest }: NightwatchBrowser) => {
    await supertest.request(server).get('/ping').expect(201);
  },
  'Can POST a booking': async ({ supertest }: NightwatchBrowser) => {
    await supertest
      .request(server)
      .post('/booking')
      .set('Content-type', 'application/json')
      .accept('application/json')
      .send({
        firstname: 'Really',
        lastname: 'Mello',
        totalprice: 31337,
        depositpaid: false,
        bookingdates: {
          checkin: '2023-04-01',
          checkout: '2023-04-14',
        },
        additionalneeds:
          'Breakfast, dark roast coffee, extra pillows, pet fish',
      })
      .expect(200)
      .then((response: any) => {
        expect(response.body.booking).to.have.property('firstname', 'Really');
      });
  },
};

export default bookerTests;
