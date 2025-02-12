import { test, expect } from "@playwright/test";

test("login and register", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/auth_ecommerce");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("#loginSection")).toContainText("Login - Shop");
  await expect(page.locator('form[name="loginForm"]')).toContainText("Email");
  await expect(page.locator('form[name="loginForm"]')).toContainText(
    "Password"
  );
  await page.getByRole("textbox", { name: "Email" }).fill("admin@admin.com");
  await page.getByRole("textbox", { name: "Password" }).fill("admin123");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(
    page.getByRole("heading", { name: "SHOPPING CART" })
  ).toBeVisible();
  await expect(page.getByText("ITEM")).toBeVisible();
  await expect(page.getByText("PRICE")).toBeVisible();
  await expect(page.getByText("QUANTITY")).toBeVisible();
  await expect(
    page.getByText("Samsung Galaxy A32, 128GB, White $286.99 REMOVE")
  ).not.toBeVisible();
  await page.getByRole("button", { name: "ADD TO CART" }).nth(2).click();
  await expect(
    page.getByText("Samsung Galaxy A32, 128GB, White $286.99 REMOVE")
  ).toBeVisible();
  await page.getByRole("button", { name: "PROCEED TO CHECKOUT" }).click();
  await page
    .getByRole("textbox", { name: "Enter phone number" })
    .fill("123456789");
  await page
    .getByRole("textbox", { name: "Little Streets" })
    .fill("street 12345");
  await page.getByRole("textbox", { name: "London" }).fill("Seattle");
  await page
    .locator("#countries_dropdown_menu")
    .selectOption("United States of America");
  await page.getByRole("button", { name: "Submit Order" }).click();
  await expect(page.locator("#message")).toContainText(
    "Congrats! Your order of $286.99 has been registered and will be shipped to street 12345, Seattle - United States of America."
  );
});
