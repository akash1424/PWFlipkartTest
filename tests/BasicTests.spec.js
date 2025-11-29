import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Navigate to Flipkart Homepage',async ({page})=>{

    const homepage=new HomePage(page);
    await homepage.navigateToHomePage();


})
test('Verify Page Title',async ({page})=>{

    const homepage=new HomePage(page);
    await homepage.navigateToHomePage();
    const title=await homepage.getPageTitle();
    await expect(page).toHaveTitle(/Flipkart|Shopping/i);


})
test('Is Page Logo Visible?',async ({page})=>{

    const homepage=new HomePage(page);
    await homepage.navigateToHomePage();
    await expect(page.locator(homepage.logo)).toBeVisible();


})