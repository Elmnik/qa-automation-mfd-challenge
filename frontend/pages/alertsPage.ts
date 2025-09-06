import { Page } from '@playwright/test';

export class AlertsPage {
  constructor(private page: Page) {}

  async navigateToAlerts() {
    // Go Directly to alerts
    await this.page.goto('https://demoqa.com/alerts');
    
    // Wait the button be visible
    await this.page.waitForSelector('#promtButton', { state: 'visible' });
  }

  async handlePrompt(name: string) {
    // Dilag hander before to click
    this.page.once('dialog', async dialog => {
      await dialog.accept(name);
    });
    
    // click
    await this.page.click('#promtButton');
  }

  async getPromptResult() {
    return await this.page.locator('#promptResult').textContent();
  }
}