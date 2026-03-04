import { Page, expect } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async searchByRole(role: string) {
    await this.page.locator('.oxd-select-text').first().click();
    await this.page.getByRole('option', { name: role }).click();
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async validateRoleResult(role: string) {
    await expect(this.page.locator('.oxd-table-body')).toContainText(role);
  }
}