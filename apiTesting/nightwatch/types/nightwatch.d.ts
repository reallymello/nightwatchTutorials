import supertest, { SuperTest, Test } from 'supertest';
export * from '@types/nightwatch';

declare module 'nightwatch' {
  export interface NightwatchCustomCommands {
    supertest: {
      request: (app: any) => SuperTest<Test>;
    };
  }
}
