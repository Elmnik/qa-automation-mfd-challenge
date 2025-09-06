import { test } from '@playwright/test';
import { WidgetsPage } from '../pages/widgetsPage';

test('Test_010 - Verify menu navigation to Sub Sub Item 1', async ({ page }) => {
  const widgetsPage = new WidgetsPage(page);
  
  // This now goes directly to https://demoqa.com/menu
  await widgetsPage.testMenuNavigation();
});