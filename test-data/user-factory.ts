import { faker } from "@faker-js/faker";

export interface TestUser{
    username:string,
    password:string
}

export function testUser():TestUser{

    const username:string = `${faker.internet.email()}`
    const password:string = "Test@123"

    return {username,password}
}