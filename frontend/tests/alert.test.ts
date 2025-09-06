import { test, expect } from '@playwright/test';
import { AlertsPage } from '../pages/alertsPage';

test('Test_006 - Prompt Alert', async ({ page }) => {
  const alertsPage = new AlertsPage(page);
  
  await alertsPage.navigateToAlerts();
  
  const name = 'elmer';
  await alertsPage.handlePrompt(name);
  
  const result = await alertsPage.getPromptResult();
  expect(result).toContain(name);
});