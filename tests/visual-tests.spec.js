import { test, expect } from "@playwright/test";
import testData from "../data/test-data.json";
const { LoginPage } = require("../pages/login-page");
const { CartPage } = require("../pages/cart-page");

test.describe("Visual Tests", () => {
  // Perform login before each test case
  test.beforeEach("Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);

    await expect(page).toHaveScreenshot("login.png"); // Capture and verify page screenshot
  });

  // --------------------------------------------------------------------

  test("All Items page", async ({ page }) => {
    await expect(page).toHaveScreenshot("all-items-az.png"); // Capture and verify page screenshot
  });

  // --------------------------------------------------------------------

  test("Cart page", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.goToCart();

    await expect(page).toHaveScreenshot("cart.png"); // Capture and verify page screenshot
  });

  // --------------------------------------------------------------------

  test("Checkout page", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.goToCart();
    await cartPage.goToCheckout();

    await expect(page).toHaveScreenshot("checkout.png"); // Capture and verify page screenshot
  });
});
