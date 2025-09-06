import { Page } from '@playwright/test';

export class ElementsPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.goto('https://demoqa.com/');
    await this.page.click('text=Elements');
  }

  async fillTextBox(name: string, email: string, current: string, permanent: string) {
    await this.page.click('text=Text Box');
    await this.page.fill('#userName', name);
    await this.page.fill('#userEmail', email);
    await this.page.fill('#currentAddress', current);
    await this.page.fill('#permanentAddress', permanent);
    await this.page.click('#submit');
  }

  async selectRadioButton(option: string) {
    await this.page.click('text=Radio Button');
    await this.page.click(`label:has-text("${option}")`);
  }
}