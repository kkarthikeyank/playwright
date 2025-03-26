export class LoginPage {
    constructor(page) {
      this.page = page;
      this.usernameInput = page.getByRole('textbox', { name: 'Enter Username' });
      this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
      this.loginButton = page.getByRole('button', { name: 'Login' });
    }
  
    async navigate() {
      await this.page.goto('https://letcode.in/login');
    }
  
    async login(username, password) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }
  }
  