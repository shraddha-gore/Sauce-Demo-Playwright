export class CheckoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.firstNameInput = "#first-name";
    this.lastNameInput = "#last-name";
    this.postalCodeInput = "#postal-code";
    this.continueButton = "#continue";
    this.finishButton = "#finish";
    this.messageContainer = ".checkout_complete_container";
  }

  async fillCheckoutDetails(firstName, lastName, postalCode) {
    await this.page.locator(this.firstNameInput).fill(firstName);
    await this.page.locator(this.lastNameInput).fill(lastName);
    await this.page.locator(this.postalCodeInput).fill(postalCode);
    await this.page.locator(this.continueButton).click();
  }

  async finishCheckout() {
    await this.page.locator(this.finishButton).click();
  }

  async getMessageText() {
    return await this.page.locator(this.messageContainer).textContent();
  }
}
