import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login'

test('test1', async ({ page }) => {
  const Login= new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword!')
});

test.skip('test2', async ({ page }) => {
  const Login= new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword!')
});

test.only('test3', async ({ page }) => {
  const Login= new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword!')
});

test.describe.parallel('Smoke testing', () => {
  test('test4.1', async ({ page }) => {
    const Login= new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('tomsmith','SuperSecretPassword!')
  });

  test('test4.2', async ({ page }) => {
    const Login= new LoginPage(page)
    await Login.gotoLoginPage()
    await Login.login('tomsmith','SuperSecretPassword!')
  });
});

test('testtag @Tag1', async ({ page }) => {
  const Login= new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword!')
});

test('testtag2 @Tag2', async ({ page }) => {
  const Login= new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword!')
});

test('testfail', async ({ page }) => {
  const Login= new LoginPage(page)
  await Login.gotoLoginPage()
  await Login.login('tomsmith','SuperSecretPassword')
});