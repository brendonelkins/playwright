import { test, expect } from "@playwright/test";

test("Simulate network conditions", async ({ page, context }) => {
  await page.goto("https://qa-practice.netlify.app/");

  await expect(page).toHaveURL("https://qa-practice.netlify.app/");

  await context.setOffline(true);

  try {
    await page.goto("https://qa-practice.netlify.app/");
  } catch (error) {
    console.log("Error while offline: ", error);
  }

  await context.setOffline(false);
  await page.goto("https://qa-practice.netlify.app/");

  await expect(page).toHaveURL("https://qa-practice.netlify.app/");
});
