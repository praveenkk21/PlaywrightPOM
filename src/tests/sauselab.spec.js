const { test, expect } = require('@playwright/test');
import { SauselabLoginPage } from '../pages/sauselab/sauselabLogin';
import { SauselabHomePage } from '../pages/sauselab/sauselabHome';
import { DataFetch } from '../utils/datafetch';
<<<<<<< HEAD
import { ai } from '@zerostep/playwright';

const getTestData = new DataFetch();
=======
const getTestData = new DataFetch('testData');
>>>>>>> 7015cb5c23c68c76b76f09c3bb899408efb325e9

test('sauselab page test with all product', async ({ page }) => {
    const values=getTestData.getJsonArray('test1');
    const sauselabLoginPage = new SauselabLoginPage(page);
    await sauselabLoginPage.gotoLoginPage(values.username,values.password);
    const sauselabHomePage = new SauselabHomePage(page)
    await sauselabHomePage.addAllToCartButtons();
    await sauselabHomePage.clickShoppingCartLink();
    await sauselabHomePage.checkOutInformation(values.firstName,values.lastName,values.postalCode);
});

test('sauselab page test with Bike light', async ({ page }) => {
  const values=getTestData.getJsonArray('test2');
  const sauselabLoginPage = new SauselabLoginPage(page);
  await sauselabLoginPage.gotoLoginPage(values.username,values.password);
  const sauselabHomePage = new SauselabHomePage(page)
  await sauselabHomePage.addToCartButtons(values.productName);
  await sauselabHomePage.clickShoppingCartLink();
  await sauselabHomePage.checkOutInformation(values.firstName,values.lastName,values.postalCode);
});

test('sauselab page test with Bike loght', async ({ page }) => {
  const aiArgs = {page, test};
  const values=getTestData.getJsonArray('test2');
  const sauselabLoginPage = new SauselabLoginPage(page);
  await sauselabLoginPage.gotoLoginPage(values.username,values.password);
  const sauselabHomePage = new SauselabHomePage(page)
  await ai('Click Add to Cart button available under the "Sauce Labs Bolt T-Shirt" ', aiArgs);
  //await sauselabHomePage.addToCartButtons(values.productName);
  await sauselabHomePage.clickShoppingCartLink();
  await sauselabHomePage.checkOutInformation(values.firstName,values.lastName,values.postalCode);
});