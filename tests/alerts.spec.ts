import { test, expect } from "@playwright/test";

test("alerts", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/alerts");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("h2")).toContainText("Alerts Example");
  await expect(page.getByRole("button", { name: "Alert" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Confirm" })).toBeVisible();
  page.once("dialog", (dialog) => {
    expect(dialog.message()).toBe("Hello! I am an alert box!!");
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Alert" }).click();
  page.once("dialog", (dialog) => {
    expect(dialog.message()).toContain("Press a button!");
    expect(dialog.message()).toContain("Either OK or Cancel.");
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Confirm" }).click();
});
