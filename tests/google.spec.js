// tests/example.spec.js
import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Fill in username
  await page.locator('#username').fill('student'); 

  // Fill in password
  await page.locator('#password').fill('Password123');

  // Click the login button
  await page.locator('#submit').click();

  // Assert that the login was successful
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});



// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
 
//   await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=7569182727666296973&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9301667&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1');
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
//   await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Tv');
//   await page.getByRole('button', { name: 'tv 32' }).click();
//   const page1Promise = page.waitForEvent('popup');
//   await page.getByRole('link', { name: 'Sponsored Ad - acer 80 cm (32 inches) I Pro Series HD Ready Smart LED Google TV' }).click();
//   const page1 = await page1Promise;
//   await page1.goto('https://www.amazon.in/Acer-inches-Ready-Google-AR32HDIGU2841AT/dp/B0D9BX9DMB/ref=sr_1_1_sspa?crid=2Y99CABD3PV31&dib=eyJ2IjoiMSJ9.IOoaFUPI-cbgU1wANeJd9Yoc8opIWyqDAwbzsIw6yDs9k4yEWnou5QFlTLlheaAxlrb8U1yJ4G3nGcsaJqgu5fd0LUQMrvcwoQVqhZhsdwQWRKC2Rcf6mB9USxpKpmsyyiZ05sKZda2yq_jgCVrQtsOv8nGnxC_cvufdqpOMUbF-a1anKe3URxN6Hn7FXuhIdx7NfgQ4TufalhHazKfSYfJeqw4-Hp-311e2xboQOdo.5OXutsdB9l4ffoJBEzlfNsyfBxusu2K9zU2s7yUM_HE&dib_tag=se&keywords=tv%2B32&qid=1742812594&sprefix=Tv%2Caps%2C500&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
//   await page1.getByRole('button', { name: 'Add to Cart', exact: true }).click();
// });

import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://letcode.in/');
  await page.waitForTimeout(300); // Wait for 300ms

  await page.getByRole('link', { name: 'Work-Space' }).click();
  await page.waitForTimeout(300); // Wait for 300ms

  await page.getByRole('link', { name: 'Date & Time' }).click();
  await page.waitForTimeout(300); // Wait for 300ms

  const dateInput = page.locator('input[type="date"]'); // Locate the date input field
  await dateInput.fill('2025-03-04'); // Fill the date
  await page.waitForTimeout(3000); // Wait for 300ms
});
