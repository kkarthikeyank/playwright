const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#submit');
    this.successMessage = page.locator('h1');
  }

  async navigate() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async verifyLoginSuccess() {
    await expect(this.successMessage).toHaveText('Logged In Successfully');
  }
}

module.exports = { LoginPage };
