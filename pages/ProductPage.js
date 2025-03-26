export class ProductPage {
    constructor(page) {
      this.page = page;
      this.priceButton = page.getByRole('button', { name: '₹ 55.99' });
      this.addToCartButton = page.getByRole('button', { name: ' Add to Cart' });
    }
  
    async selectProduct() {
      await this.priceButton.click();
      await this.addToCartButton.click();
    }
  }
  