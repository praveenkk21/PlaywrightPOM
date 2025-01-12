const { test, expect } = require('@playwright/test');
import { SauselabLoginPage } from '../pages/sauselab/sauselabLogin';
import { SauselabHomePage } from '../pages/sauselab/sauselabHome';
import { DataFetch } from '../utils/datafetch';
const getTestData = new DataFetch();

test('sauselab page test with all product', async ({ page }) => {
    const values=getTestData.getJsonArray('test1');
    const sauselabLoginPage = new SauselabLoginPage(page);
    await sauselabLoginPage.gotoLoginPage(values.username,values.password);
    const sauselabHomePage = new SauselabHomePage(page)
    await sauselabHomePage.addAllToCartButtons();
    await sauselabHomePage.clickShoppingCartLink();
    await sauselabHomePage.checkOutInformation(values.firstName,values.lastName,values.postalCode);
});

test('sauselab page test with Bike loght', async ({ page }) => {
  const values=getTestData.getJsonArray('test2');
  const sauselabLoginPage = new SauselabLoginPage(page);
  await sauselabLoginPage.gotoLoginPage(values.username,values.password);
  const sauselabHomePage = new SauselabHomePage(page)
  await sauselabHomePage.addToCartButtons(values.productName);
  await sauselabHomePage.clickShoppingCartLink();
  await sauselabHomePage.checkOutInformation(values.firstName,values.lastName,values.postalCode);
});