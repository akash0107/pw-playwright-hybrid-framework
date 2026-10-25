import { request } from "@playwright/test";
import { test,expect } from "../../fixtures/testFixtures";
import { testUser } from "../../test-data/user-factory";
import { AuthApiClient } from "../../api/AuthApiClient";


test('Implementing hybrid framework', async ({ loginPage,request,homePage }) => {
    const user = testUser()
    const apiAuthClient = new AuthApiClient(request)
    const responseReg = await apiAuthClient.register(user.username,user.password)
    const regResponse = await responseReg.json()
    console.log(regResponse);

    const responseLogin = await apiAuthClient.login(user.username,user.password)
    const responseLoginBody = await responseLogin.json()
    const bearerToken = responseLoginBody.token
    await loginPage.navigate()
    await loginPage.setAuthToken(bearerToken)

    await loginPage.navigateToHome()
    console.log(await loginPage.getLocalStorage("eventhub_token"))
    await expect(homePage.userEmailDisplay).toContainText(user.username)
    await loginPage.page.close()
});
