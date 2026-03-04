import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async launchBrowser() {
    this.browser = await chromium.launch({ headless: false });
    const context = await this.browser.newContext();
    this.page = await context.newPage();
  }

  async closeBrowser() {
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);