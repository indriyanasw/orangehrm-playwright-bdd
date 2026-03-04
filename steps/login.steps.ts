import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from './world';

Given('User membuka halaman login', async function (this: CustomWorld) {
  await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});

When(
  'User login dengan username {string} dan password {string}',
  async function (this: CustomWorld, username: string, password: string) {
    await this.page.getByPlaceholder('Username').fill(username);
    await this.page.getByPlaceholder('Password').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
);

Then('Login berhasil', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/dashboard/);
});

Then('Muncul pesan error', async function (this: CustomWorld) {
  await expect(this.page.locator('.oxd-alert-content-text')).toBeVisible();
});