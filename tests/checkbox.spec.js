// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
 
//   await page.goto('https://letcode.in/radio');
//   await page.check('#yes').click 


 
// //   await page.getByText('Yes').first().click();
// //   await page.getByText('Cofirm you can select only').click();
// //   await page.locator('#one').check();
// //   await page.getByRole('checkbox', { name: 'I agree to the FAKE terms and' }).check();
// });


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://letcode.in/radio/');
  await page.locator('#yes').check();
  await page.locator('#one').check();
  await page.getByRole('checkbox', { name: 'I agree to the FAKE terms and' }).check();
  await page.waitForTimeout(30000); // 300,000 ms = 300 sec



});