import { test, expect } from "@playwright/test";

test("date picker", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/calendar");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("#content")).toContainText(
    "Range Date Picker Example"
  );
  await expect(page.locator("#range-date-calendar")).toBeVisible();
  await page.locator("#range-date-calendar").click();
  await page.getByRole("cell", { name: "3", exact: true }).first().click();
  await page.getByRole("cell", { name: "10" }).first().click();
  await page.getByRole("button", { name: "Apply" }).click();
  await expect(page.locator("#range-date-calendar")).toHaveValue(
    "01/03/2018 - 01/10/2018"
  );
  await expect(
    page.getByRole("textbox", { name: "Pick a date" })
  ).toBeVisible();
  await page.getByRole("textbox", { name: "Pick a date" }).click();
  await page.getByRole("cell", { name: "12" }).click();
});
