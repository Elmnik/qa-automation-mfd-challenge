import { test } from '@playwright/test';
import { WidgetsPage } from '../pages/widgetsPage';

test('Test_009 - Verify tabs functionality', async ({ page }) => {
  const widgetsPage = new WidgetsPage(page);
  await widgetsPage.testTabsFunctionality();
});