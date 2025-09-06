import { test, expect } from '@playwright/test';
import { ElementsPage } from '../pages/elementsPage';

test('Test_007 - Radio Button Yes', async ({ page }) => {
  const elementsPage = new ElementsPage(page);
  await elementsPage.navigate();
  await elementsPage.selectRadioButton('Yes');

  const result = await page.locator('.text-success').textContent();
  expect(result).toBe('Yes');
});