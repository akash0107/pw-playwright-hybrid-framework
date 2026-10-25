import { test,expect } from "../../fixtures/testFixtures";
import { invalidUser, validUser } from "../../test-data/user";

test('TC-001 fields are displaying', async ({ loginPage }) => {
    await loginPage.navigate()

    await expect(loginPage.page).toHaveURL(/\/login\/?$/);

    await expect(loginPage.emailInput).toBeVisible();

    await expect(loginPage.passwordInput).toBeVisible();

    await expect(loginPage.loginBtn).toBeVisible();

});

test('UI-02: Invalid Login should display an Error', async ({ loginPage }) => {
    await loginPage.navigate()
    await loginPage.login(invalidUser.username,invalidUser.password)
    await expect(loginPage.page.getByText(/Invalid email or password/)).toBeVisible()
    await loginPage.page.close()
});

test('UI-03: Valid login', async ({ loginPage,homePage }) => {
    await loginPage.navigate()
    await loginPage.login(validUser.username,validUser.password)
    await expect(loginPage.page).not.toHaveURL(/\/login\/?$/);
    await expect(homePage.logOutBtn).toBeVisible()
    await loginPage.page.close()
});

