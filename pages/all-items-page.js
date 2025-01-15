export class AllItemsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sortDropdown = ".product_sort_container";
    this.items = ".inventory_item";
  }

  async sortItems(order) {
    await this.page.selectOption(this.sortDropdown, order);
  }

  async getItemNames() {
    return await this.page
      .locator(this.items)
      .locator(".inventory_item_name")
      .allTextContents();
  }

  async getItemPrices() {
    const prices = await this.page
      .locator(this.items)
      .locator(".inventory_item_price")
      .allTextContents();
    return prices.map((price) => parseFloat(price.replace("$", "")));
  }

  async addItemToCart(name) {
    const xpath = `//div[text()='${name}']/ancestor::div[@class='inventory_item']//button`;
    const button = this.page.locator(xpath);
    await button.click();
  }

  async addItemsToCart(items) {
    for (const item of items) {
      await this.addItemToCart(item);
    }
  }
}
