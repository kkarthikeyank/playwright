export class CartPage {
    constructor(page) {
      this.page = page;
      this.cartButton = page.getByRole('button', { name: '' });
      this.increaseQuantityButton = page.getByRole('button', { name: '+' });
      this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }
  
    async goToCart() {
      await this.cartButton.click();
    }
  
    async increaseQuantity() {
      await this.increaseQuantityButton.click();
    }
  
    async checkout() {
      this.page.once('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.dismiss();
      });
      await this.checkoutButton.click();
    }
  }
  