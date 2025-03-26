const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpages');

test('Login test with POM', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('student', 'Password123');
  await loginPage.verifyLoginSuccess();
});
