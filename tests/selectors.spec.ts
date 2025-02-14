import { test, expect } from "@playwright/test";

test("xpath button selectors", async ({ page }) => {
  await page.goto("https://www.qa-practice.com/elements/button/simple");
  await page.getByRole("link", { name: "Looks like a button" }).click();
  await expect(page.getByLabel("Select state")).not.toBeVisible();
  await page.getByRole("link", { name: "Disabled" }).click();
  await expect(page.getByLabel("Select state")).toBeVisible();
  await page.getByLabel("Select state").selectOption("enabled");
  await page.locator('input[name="submit"]').click();
  await expect(page.locator('//p[text()="Submitted"]')).toBeVisible();
  await expect(page.locator("#req_text")).not.toBeVisible();
  await page.locator('//a[text()="Requirements:"]').click();
  await expect(
    page.locator('//li[text()="Submit button should be disabled by default."]')
  ).toBeVisible();
});
