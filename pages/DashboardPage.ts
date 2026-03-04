import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  async goToAdminMenu() {
    await this.page.getByRole('link', { name: 'Admin' }).click();
    await this.page.waitForURL('**/admin/viewSystemUsers');
  }
}