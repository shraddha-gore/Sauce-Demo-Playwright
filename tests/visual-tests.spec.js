import { test, expect } from "@playwright/test";
import testData from "../data/test-data.json";
const { LoginPage } = require("../pages/login-page");
const { CartPage } = require("../pages/cart-page");

test.describe("Visual Tests", () => {
  test.beforeEach("Login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(testData.username, testData.password);

    await expect(page).toHaveScreenshot("login.png");
  });

  // --------------------------------------------------------------------

  test("All Items page", async ({ page }) => {
    await expect(page).toHaveScreenshot("all-items-az.png");
  });

  // --------------------------------------------------------------------

  test("Cart page", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.goToCart();

    await expect(page).toHaveScreenshot("cart.png");
  });

  // --------------------------------------------------------------------

  test("Checkout page", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.goToCart();
    await cartPage.goToCheckout();

    await expect(page).toHaveScreenshot("checkout.png");
  });
});
