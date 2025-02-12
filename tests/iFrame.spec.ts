import { test, expect } from "@playwright/test";

test("iFrame", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/iframe");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("#iframe-checkboxes")).toBeVisible();
  await expect(
    page
      .locator("#iframe-checkboxes")
      .contentFrame()
      .getByRole("link", { name: "Navbar" })
  ).toBeVisible();
  await expect(
    page
      .locator("#iframe-checkboxes")
      .contentFrame()
      .getByRole("link", { name: "Home (current)" })
  ).toBeVisible();
  await expect(
    page
      .locator("#iframe-checkboxes")
      .contentFrame()
      .getByRole("link", { name: "Features" })
  ).toBeVisible();
  await expect(
    page
      .locator("#iframe-checkboxes")
      .contentFrame()
      .getByRole("link", { name: "Pricing" })
  ).toBeVisible();
  await expect(
    page
      .locator("#iframe-checkboxes")
      .contentFrame()
      .getByRole("link", { name: "Disabled" })
  ).toBeVisible();
  await page
    .locator("#iframe-checkboxes")
    .contentFrame()
    .getByRole("link", { name: "Navbar" })
    .click();
  await page
    .locator("#iframe-checkboxes")
    .contentFrame()
    .getByRole("link", { name: "Home (current)" })
    .click();
  await page
    .locator("#iframe-checkboxes")
    .contentFrame()
    .getByRole("link", { name: "Features" })
    .click();
  await page
    .locator("#iframe-checkboxes")
    .contentFrame()
    .getByRole("link", { name: "Pricing" })
    .click();
  await page
    .locator("#iframe-checkboxes")
    .contentFrame()
    .getByRole("link", { name: "Disabled" })
    .click();
  await expect(
    page.locator("#iframe-checkboxes").contentFrame().getByRole("heading")
  ).toContainText("Hello, this is an Iframe!");
  await expect(
    page.locator("#iframe-checkboxes").contentFrame().locator("body")
  ).toContainText(
    "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
  );
  await expect(
    page.locator("#iframe-checkboxes").contentFrame().locator("body")
  ).toContainText("Lorem ipsum dolor sit amet.");
  await expect(
    page.locator("#iframe-checkboxes").contentFrame().locator("#show-text")
  ).toBeHidden();
  await page
    .locator("#iframe-checkboxes")
    .contentFrame()
    .getByRole("button", { name: "Learn more" })
    .click();
  await expect(
    page.locator("#iframe-checkboxes").contentFrame().locator("#show-text")
  ).toBeVisible();
});
