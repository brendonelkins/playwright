import { test, expect } from "@playwright/test";
import fs from "fs";

test("download", async ({ page }) => {
  await page.goto(
    "https://testpages.eviltester.com/styled/download/download.html"
  );
  await expect(page.getByRole("heading")).toContainText("Download a File");

  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Direct Link Download", exact: true })
    .click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("textfile.txt");
  const filePath = await download.path();
  expect(fs.existsSync(filePath)).toBeTruthy();

  const download1Promise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Direct Link Download New" }).click();
  const download1 = await download1Promise;
  expect(download1.suggestedFilename()).toBe("textfile.txt");

  const download2Promise = page.waitForEvent("download");
  await page.getByRole("button", { name: "Server Download" }).click();
  const download2 = await download2Promise;
  expect(download2.suggestedFilename()).toBe("textfile.txt");

  const download3Promise = page.waitForEvent("download");
  await page.getByText("Direct Link Download Direct").click();
  const download3 = await download3Promise;
  expect(download3.suggestedFilename()).toBe("textfile.txt");

  await page.getByRole("button", { name: "Direct Link", exact: true }).click();
  await expect(page.locator("pre")).toContainText(
    "This is a text file. Downloaded from https://testapps.heroku.com Remember to visit https://EvilTester.com for all your testing edufication."
  );
});
