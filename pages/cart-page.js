import { expect } from "@playwright/test";

export class CartPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.cartIcon = ".shopping_cart_link";
    this.checkoutButton = "#checkout";
  }

  async goToCart() {
    await this.page.locator(this.cartIcon).click();
    await expect(this.page).toHaveURL("cart.html");
  }

  async goToCheckout() {
    await this.page.locator(this.checkoutButton).click();
    await expect(this.page).toHaveURL("checkout-step-one.html");
  }
}
