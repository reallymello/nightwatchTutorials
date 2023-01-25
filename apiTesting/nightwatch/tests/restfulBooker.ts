import { NightwatchBrowser, NightwatchTests } from 'nightwatch';
import '@nightwatch/apitesting';

const baseUrl: string = 'https://restful-booker.herokuapp.com';
type token = {
  token: string;
};
let authToken: token;
let bookingId: number;

const bookerTests: NightwatchTests = {
  before: async (client: NightwatchBrowser) => {
    await client.supertest
      .request(baseUrl)
      .post('/auth')
      .send({
        username: 'admin',
        password: 'password123',
      })
      .expect(200)
      .expect('Content-type', 'application/json; charset=utf-8')
      .then((response: any) => {
        authToken = response.body;
      });
  },
  'Can get first booking': async ({ supertest }: NightwatchBrowser) => {
    await supertest
      .request(baseUrl)
      .get('/booking')
      .expect(200)
      .expect('Content-type', 'application/json; charset=utf-8')
      .then((response: any) => {
        expect(response.body).instanceOf(Array);
        expect(response.body.length).to.be.greaterThan(0);
        expect(response.body[0]).to.have.property('bookingid');
        expect(response.body[0].bookingid).to.be.greaterThan(0);
      });
  },
  'Can create and retrieve booking': async ({
    supertest,
  }: NightwatchBrowser) => {
    const bookingData = {
      firstname: 'Really',
      lastname: 'Mello',
      totalprice: 31337,
      depositpaid: false,
      bookingdates: {
        checkin: '2023-04-01',
        checkout: '2023-04-14',
      },
      additionalneeds: 'Breakfast, dark roast coffee, extra pillows, pet fish',
    };

    // Create a new booking
    await supertest
      .request(baseUrl)
      .post('/booking')
      .set('Content-type', 'application/json')
      .accept('application/json')
      .send(bookingData)
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response: any) => {
        const booking = response.body;
        expect(booking).to.have.property('bookingid');
        bookingId = booking.bookingid;
        expect(booking.booking.additionalneeds).to.equal(
          'Breakfast, dark roast coffee, extra pillows, pet fish'
        );
      });

    // Retrieve the new booking
    await supertest
      .request(baseUrl)
      .get(`/booking/${bookingId}`)
      .accept('application/json')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response: any) => {
        const booking = response.body;
        expect(booking).to.eql(bookingData);
      });
  },
  'Can update booking': async ({ supertest }: NightwatchBrowser) => {
    // Update Booking
    await supertest
      .request(baseUrl)
      .put(`/booking/${bookingId}`)
      .set('Content-type', 'application/json')
      //.set('Cookie', `token=${authToken.token}`)
      .auth('admin', 'password123') // showing another way of passing in creds
      .accept('application/json')
      .send({
        firstname: 'Really',
        lastname: 'Mello',
        totalprice: 2,
        depositpaid: true,
        bookingdates: {
          checkin: '2023-04-01',
          checkout: '2023-04-14',
        },
        additionalneeds: 'an odd-numbered floor',
      })
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response: any) => {
        expect(response.body).to.have.property('depositpaid', true);
        expect(response.body).to.have.property(
          'additionalneeds',
          'an odd-numbered floor'
        );
        expect(response.body).to.have.property('totalprice', 2);
      });
  },
  'Can partially update booking': async ({ supertest }: NightwatchBrowser) => {
    await supertest
      .request(baseUrl)
      .patch(`/booking/${bookingId}`)
      .set('Content-type', 'application/json')
      .set('Cookie', `token=${authToken.token}`)
      .accept('application/json')
      .send({
        totalprice: 200,
        depositpaid: false,
        bookingdates: {
          checkin: '2023-03-31',
          checkout: '2023-04-15',
        },
        additionalneeds: 'an even-numbered floor',
      })
      .then((response: any) => {
        expect(response.body).to.have.property('depositpaid', false);
        expect(response.body).to.have.property(
          'additionalneeds',
          'an even-numbered floor'
        );
        expect(response.body).to.have.property('totalprice', 200);
        expect(response.body.bookingdates).to.have.property(
          'checkin',
          '2023-03-31'
        );
        expect(response.body.bookingdates).to.have.property(
          'checkout',
          '2023-04-15'
        );
      });

    // Retrieve the updated booking
    await supertest
      .request(baseUrl)
      .get(`/booking/${bookingId}`)
      .accept('application/json')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .then((response: any) => {
        expect(response.body).to.have.property(
          'additionalneeds',
          'an even-numbered floor'
        );
      });
  },
  'Can delete booking': async ({ supertest }: NightwatchBrowser) => {
    await supertest
      .request(baseUrl)
      .delete(`/booking/${bookingId}`)
      .set('Cookie', `token=${authToken.token}`)
      .expect(201);

    // This second call here doesn't appear to get reported or checked? Nightwatch bug?
    await supertest
      .request(baseUrl)
      .delete(`/booking/${bookingId}`)
      .set('Cookie', `token=${authToken.token}`)
      .expect(405);
  },
  'Cannot delete deleted booking': async ({ supertest }: NightwatchBrowser) => {
    await supertest
      .request(baseUrl)
      .delete(`/booking/${bookingId}`)
      .set('Cookie', `token=${authToken.token}`)
      .expect(405);
  },
  'Cannot retrieve deleted booking': async ({
    supertest,
  }: NightwatchBrowser) => {
    await supertest
      .request(baseUrl)
      .get(`/booking/${bookingId}`)
      .accept('application/json')
      .expect(404);
  },
};

export default bookerTests;
