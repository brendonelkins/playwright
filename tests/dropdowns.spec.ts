import { test, expect } from '@playwright/test';

test('dropdown', async ({ page }) => {
  await page.goto('https://qa-practice.netlify.app/dropdowns');
  await page.locator('#sidebarCollapse').click();
  await page.getByRole('button', { name: 'Dropdown' }).click();
  await page.getByRole('link', { name: 'Hover me for more options' }).hover();
  await page.getByRole('link', { name: 'Even More..' }).hover();
  await page.getByRole('link', { name: 'another level' }).hover();
  await page.getByRole('link', { name: '4th level - 2' }).click();
  await expect(page).toHaveURL('https://qa-practice.netlify.app/dropdowns#4th-level-2');
});