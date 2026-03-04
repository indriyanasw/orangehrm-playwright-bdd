import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { DashboardPage } from '../pages/DashboardPage';
import { AdminPage } from '../pages/AdminPage';

let dashboardPage: DashboardPage;
let adminPage: AdminPage;

Given('User berada di halaman Admin', async function (this: CustomWorld) {
  dashboardPage = new DashboardPage(this.page);
  adminPage = new AdminPage(this.page);

  await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await this.page.getByPlaceholder('Username').fill('Admin');
  await this.page.getByPlaceholder('Password').fill('admin123');
  await this.page.getByRole('button', { name: 'Login' }).click();

  await dashboardPage.goToAdminMenu();
});

When('User memilih role {string}', async function (this: CustomWorld, role: string) {
  await this.page.locator('.oxd-select-text').first().click();
  await this.page.getByRole('option', { name: role }).click();
});

When('User klik search', async function (this: CustomWorld) {
  await this.page.getByRole('button', { name: 'Search' }).click();
});

Then('Data dengan role {string} muncul', async function (this: CustomWorld, role: string) {
  await adminPage.validateRoleResult(role);
});