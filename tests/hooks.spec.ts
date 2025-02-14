import { test, expect } from "@playwright/test";

test.beforeEach("login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
});

test.afterEach("logout", async ({ page }) => {
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});

test("test", async ({ page }) => {
  await expect(page.locator('[data-test="primary-header"]')).toContainText(
    "Swag Labs"
  );
  await expect(page.locator('[data-test="item-4-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-1-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-5-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-2-img-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-3-img-link"]')).toBeVisible();
});
