import { test, expect } from "@playwright/test";

test("new tab", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/tab");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("h2")).toContainText("Switch to a new Browser Tab");
  await expect(
    page.getByRole("button", { name: "Press me - New Tab" })
  ).toBeVisible();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Press me - New Tab" }).click();
  const page1 = await page1Promise;
  await expect(page1.locator("h2")).toContainText("Table Example");
  await expect(page1.getByText("Home Contact Table Example #")).toBeVisible();
});

test("new window", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/window");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("h2")).toContainText(
    "Switch to a new Browser Window"
  );
  await expect(
    page.getByRole("button", { name: "Press me - New Window" })
  ).toBeVisible();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Press me - New Window" }).click();
  const page1 = await page1Promise;
  await expect(page1.locator("h2")).toContainText("Table Example");
  await expect(page1.getByText("Home Contact Table Example #")).toBeVisible();
});
