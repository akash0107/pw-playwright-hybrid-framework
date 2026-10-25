import { request } from "@playwright/test";
import { test,expect } from "../../fixtures/testFixtures";
import { AuthApiClient } from "../../api/AuthApiClient";
import { validUser } from "../../test-data/user";

test('Hybrid Test-01: Loin via API and check in UI', async ({ loginPage,request,homePage }) => {
    const req = new AuthApiClient(request);
    const response = await req.login(validUser.username,validUser.password)
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    let token = responseBody.token;
    console.log(`found token is ${token}`);
    await loginPage.navigate()
    //Set token to browser
    await loginPage.setAuthToken(token)
    //navigate to page
    await loginPage.navigateToHome()
    await expect(homePage.logOutBtn).toBeVisible()

});
