import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';

test('Login, Add Product & Checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('mor_2314', '83r5^_');

  const productPage = new ProductPage(page);
  await productPage.selectProduct();

  const cartPage = new CartPage(page);
  await cartPage.goToCart();
  await cartPage.increaseQuantity();
  await cartPage.checkout();
});
