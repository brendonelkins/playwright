import { test, expect } from "@playwright/test";

test("double click", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/double-click");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("h2")).toContainText(
    "Double Click on Button Example"
  );
  await expect(
    page.getByText("Congrats, you double clicked!")
  ).not.toBeVisible();
  await page.getByRole("button", { name: "Double click me" }).dblclick();
  await expect(page.getByText("Congrats, you double clicked!")).toBeVisible();
});

test("hover", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/mouse-hover");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("h2")).toContainText("Mouse Hover Example");
  await expect(
    page.getByText("If you hover this text, it will be changed.")
  ).toBeVisible();
  await expect(page.getByText("HOVERED")).not.toBeVisible();
  await page.getByText("If you hover this text, it will be changed.").hover();
  await expect(page.getByText("HOVERED")).toBeVisible();
  await expect(
    page.getByText("I am shown when someone hovers over the text above.")
  ).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: "Hover over me, example no.2" })
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Hover over me, example no.2" })
    .hover();
  await expect(
    page.getByText("I am shown when someone hovers over the text above.")
  ).toBeVisible();
});

test("show/hide", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/show-hide-element");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("h2")).toContainText("Show / Hide Element");
  await expect(page.getByRole("button", { name: "Show / Hide" })).toBeVisible();
  await expect(page.getByText("This text will be hidden")).toBeVisible();
  await page.getByRole("button", { name: "Show / Hide" }).click();
  await expect(page.getByText("This text will be hidden")).not.toBeVisible();
});
