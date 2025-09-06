import { test, expect } from '@playwright/test';
import { ElementsPage } from '../pages/elementsPage';

test('Test_008 - Text Box form', async ({ page }) => {
  const elementsPage = new ElementsPage(page);
  await elementsPage.navigate();
  await elementsPage.fillTextBox(
    'Elmer Test',
    'elmert@gmail.com',
    'Managua, Nicaragua',
    'Managua'
  );

  const nameOutput = await page.locator('#output #name').textContent();
  expect(nameOutput).toContain('Elmer Test');
});