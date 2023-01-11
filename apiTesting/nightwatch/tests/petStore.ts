import { NightwatchBrowser, NightwatchTests } from "nightwatch";

const petStoreTests: NightwatchTests = {
    'can GET count of sold inventory': async ({ supertest }: NightwatchBrowser) => {
      await supertest
        .request('https://petstore.swagger.io/v2')
        .get('/store/inventory/')
        .expect(200)
        .expect('Content-Type', /json/)
        .then((response) => {
          expect(response.body.sold).to.be.greaterThan(0);
          // console.log(JSON.stringify(response.body, null, 2));
        });
    },
    'can POST a pet to the store': async ({ supertest }: NightwatchBrowser) => {
      await supertest
        .request('https://petstore.swagger.io/v2')
        .post('/pet')
        .send({
          id: 31337,
          category: {
            id: 1313,
            name: 'owls',
          },
          name: 'Bitey',
          photoUrls: ['https://nightwatchjs.org/images/images1/mini_logo.svg'],
          tags: [
            {
              id: 0,
              name: 'replicant',
            },
          ],
          status: 'available',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .then((response) => {
          expect(response.body.id).to.equal(31337);
          expect(response.body.status).to.equal('available');
        });
    },
    'can POST order to the pet store': async ({ supertest }: NightwatchBrowser) => {
      await supertest
        .request('https://petstore.swagger.io/v2')
        .post('/store/order')
        .send({
          id: 0,
          petId: 31337,
          quantity: 1,
          shipDate: '2022-12-30T14:55:04.147Z',
          status: 'placed',
          complete: true,
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .then((response) => {
          expect(response.body.id).to.be.greaterThan(0);
          expect(response.body.quantity).to.equal(1);
          expect(response.body.status).to.equal('placed');
        });
    },
  };
  
export default petStoreTests;