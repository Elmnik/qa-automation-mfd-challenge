import { Page, Locator, expect } from '@playwright/test';

export class WidgetsPage {
  readonly page: Page;
  
  readonly tabsHeader: Locator;
  readonly menuHeader: Locator;
  
  readonly whatTab: Locator;
  readonly originTab: Locator;
  readonly useTab: Locator;
  readonly tabContent: Locator;
  
  readonly mainItem2: Locator;
  readonly subSubList: Locator;
  readonly subSubItem1: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.tabsHeader = page.locator('text=Tabs');
    this.menuHeader = page.locator('text=Menu');
    
    this.whatTab = page.locator('#demo-tab-what');
    this.originTab = page.locator('#demo-tab-origin');
    this.useTab = page.locator('#demo-tab-use');
    this.tabContent = page.locator('.tab-content');
    
    // Menu locators for menu page
    this.mainItem2 = page.locator('a:has-text("Main Item 2")');
    this.subSubList = page.locator('a:has-text("SUB SUB LIST »")');
    this.subSubItem1 = page.locator('a:has-text("Sub Sub Item 1")');
  }

  async gotoWidgetsPage() {
    await this.page.goto('https://demoqa.com/widgets');
  }

  // Separated method to go directly to menu page
  async gotoMenuPage() {
    await this.page.goto('https://demoqa.com/menu');
    await expect(this.mainItem2).toBeVisible({ timeout: 5000 });
  }

  async gotoTabsSection() {
    await this.gotoWidgetsPage();
    await this.tabsHeader.click();
    await expect(this.whatTab).toBeVisible();
  }

  async testTabsFunctionality() {
    await this.gotoTabsSection();
    await this.clickWhatTab();
    await this.clickOriginTab();
    await this.clickUseTab();
  }

  async clickWhatTab() {
    await this.whatTab.click();
    await expect(this.tabContent).toContainText('Lorem Ipsum');
  }

  async clickOriginTab() {
    await this.originTab.click();
    await expect(this.tabContent).toContainText('Contrary to popular belief');
  }

  async clickUseTab() {
    await this.useTab.click();
    await expect(this.tabContent).toContainText('It is a long established fact');
  }

  // Test 10 Logic must be rewritten because of failes on the demo web.
  async testMenuNavigation() {
    await this.gotoMenuPage();
    await this.clickMainItem2();
    await this.clickSubSubList();
    await this.clickSubSubItem1();
  }

  async clickMainItem2() {
    await this.mainItem2.click();
    await expect(this.subSubList).toBeVisible();
  }

  async clickSubSubList() {
    await this.subSubList.click();
    await expect(this.subSubItem1).toBeVisible();
  }

  async clickSubSubItem1() {
    await this.subSubItem1.click();
    await expect(this.subSubItem1).toBeVisible();
  }
}
