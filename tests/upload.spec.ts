import { test, expect } from "@playwright/test";

test("file upload", async ({ page }) => {
  await page.goto("https://qa-practice.netlify.app/file-upload");
  await page.locator("#sidebarCollapse").click();
  await expect(page.locator("h2")).toContainText("File Upload Example");
  await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
  await page.locator("#file_upload").click();
  await page
    .locator("#file_upload")
    .setInputFiles(
      "./image-files/x3fq5nt7ip0a1.jpg"
    );
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("#file_upload_response")).toContainText(
    'You have successfully uploaded "x3fq5nt7ip0a1.jpg"'
  );
});
