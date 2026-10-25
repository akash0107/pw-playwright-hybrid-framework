import { test,expect } from "@playwright/test";
import { AuthApiClient } from "../../api/AuthApiClient";
import { invalidUser, validUser } from "../../test-data/user";


test('API-01: Valid user login', async ({ request }) => {
    const authApi = new AuthApiClient(request);
    const validResponse = await authApi.login(validUser.username,validUser.password)
    const validResponseBody = await validResponse.json()
    expect ((validResponse).status()).toBe(200)
    console.log(validResponseBody);
    expect(validResponseBody.token).toBeTruthy()
});

test('API-02: Invalid user login', async ({ request }) => {

    const authApi = new AuthApiClient(request);

    const response = await authApi.login(
      invalidUser.username,
      invalidUser.password
    );

    // Expect a client error (HTTP 4xx)
    expect(response.status()).toBeGreaterThanOrEqual(400);
    expect(response.status()).toBeLessThan(500);

    const responseBody = await response.json();
    console.log(responseBody);
    
    expect(responseBody).toBeDefined();

    // Next: assert actual error response fields
  });