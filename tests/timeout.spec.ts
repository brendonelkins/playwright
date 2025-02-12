import { test, expect } from "@playwright/test";

test("loader", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/loader");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("#loader")).toBeVisible();
  await expect(page.locator("h2")).toContainText("Tada!");
  await expect(page.getByRole("paragraph")).toContainText(
    "Some text in my newly loaded page.."
  );
});
