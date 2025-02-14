import { test, expect, devices } from "@playwright/test";

test("Test on Mobile (iPhone 12)", async ({ page, browser }) => {
  const context = await browser.newContext({
    ...devices["iPhone 12"],
  });
  const mobilePage = await context.newPage();
  await mobilePage.goto("https://www.saucedemo.com/");
  console.log("Current viewport:", await mobilePage.viewportSize());
  await expect(mobilePage.locator(".login_logo")).toHaveText("Swag Labs");
  await context.close();
});

test("Test on Tablet (iPad Pro 11)", async ({ page, browser }) => {
  const context = await browser.newContext({
    ...devices["iPad Pro 11"],
  });
  const tabletPage = await context.newPage();
  await tabletPage.goto("https://www.saucedemo.com/");
  console.log("Current viewport:", await tabletPage.viewportSize());
  await expect(tabletPage.locator(".login_logo")).toHaveText("Swag Labs");
  await context.close();
});
