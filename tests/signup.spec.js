import { test, expect } from '@playwright/test';
import adminUsers from '../data/users.json';

test.describe('Admin Login', () => {
  adminUsers.forEach((user) => {
    test(`Login as Admin - ${user.username}`, async ({ page }) => {
      await page.goto('https://demo.opencart.com/admin/');

      // Fill in the login form
      await page.fill('#input-username', user.username);
      await page.fill('#input-password', user.password);
      await page.click('button[type="submit"]');

      // Verify successful login by checking for Dashboard text
      await expect(page.locator('h1')).toHaveText('Dashboard');
    });
  });
});
