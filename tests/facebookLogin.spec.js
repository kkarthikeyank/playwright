import { test, expect } from '@playwright/test';

test('Facebook login page has title', async ({ page }) => {
  // Open Facebook login page
  await page.goto('https://www.facebook.com/');

  // Expect title to contain "Facebook"
  await expect(page).toHaveTitle(/Facebook/);
});

test('Facebook login attempt', async ({ page }) => {
  await page.goto('https://www.facebook.com/');

  // Fill email and password fields
  await page.fill('input[name="email"]', 'your-email@example.com');
  await page.fill('input[name="pass"]', 'your-password');

  // Click the login button
  await page.click('button[name="login"]');

  // Wait for the home page to load (Adjust selector as needed)
  await page.waitForTimeout(5000);

  // Expect the URL to change (indicative of successful login)
  await expect(page).not.toHaveURL('https://www.facebook.com/login/');

  // Take a screenshot for verification
  await page.screenshot({ path: 'facebook_login.png' });
});

