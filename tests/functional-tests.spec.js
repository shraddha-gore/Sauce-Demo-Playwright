import { test, expect } from "@playwright/test";
import testData from "../data/test-data.json";
const { LoginPage } = require("../pages/login-page");
const { AllItemsPage } = require("../pages/all-items-page");
const { CartPage } = require("../pages/cart-page");
const { CheckoutPage } = require("../pages/checkout-page");

test.describe("Functional Tests", () => {
  // Perform login before each test case
  test.beforeEach("Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);
  });

  // --------------------------------------------------------------------

  test("Verify Name (Z-A) order on the 'All Items' page", async ({ page }) => {
    const allItemsPage = new AllItemsPage(page);
    const order = "za";

    await allItemsPage.sortItems(order);
    const itemNames = await allItemsPage.getItemNames();
    const sortedNames = itemNames.slice().sort().reverse(); // Sort names in descending order

    expect(itemNames).toEqual(sortedNames); // Verify sort order
  });

  // --------------------------------------------------------------------

  test("Verify Price (High-Low) order on the 'All Items' page", async ({
    page,
  }) => {
    const allItemsPage = new AllItemsPage(page);
    const order = "hilo";

    await allItemsPage.sortItems(order);
    const itemPrices = await allItemsPage.getItemPrices();
    const sortedPrices = itemPrices
      .slice()
      .sort((a, b) => a - b)
      .reverse(); // Sort prices in descending order

    expect(itemPrices).toEqual(sortedPrices); // Verify sort order
  });

  // --------------------------------------------------------------------

  test("Verify checkout flow on adding multiple items", async ({ page }) => {
    const allItemsPage = new AllItemsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await allItemsPage.addItemsToCart(testData.items);
    await cartPage.goToCart();
    const cartItems = await cartPage.getCartItems();

    expect(cartItems).toEqual(testData.items); // Verify cart items

    await cartPage.goToCheckout();
    await checkoutPage.fillCheckoutDetails(
      testData.firstName,
      testData.lastName,
      testData.zipCode
    );
    await checkoutPage.finishCheckout();
    const message = await checkoutPage.getMessageText();

    expect(message).toContain("Thank you for your order!"); // Verify message
  });
});
