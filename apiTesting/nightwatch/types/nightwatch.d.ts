import { SuperTest, Test } from "supertest";
export * from "@types/nightwatch";

declare module "nightwatch" {
    export type ApiTest = {
        supertest: {
            request: (app: any) => SuperTest<Test>
        }
    }
}