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
    await expect(page).toHaveTitle(/Shopping/i);


})
test('Is Page Logo Visible?',async ({page})=>{

    const homepage=new HomePage(page);
    await homepage.navigateToHomePage();
    await expect(page.locator(homepage.logo)).toBeVisible();


})
test('Login popus appear or not',async ({page})=>{

    const homepage=new HomePage(page);
    await homepage.navigateToHomePage();
    await page.waitForLoadState('domcontentloaded');
    const loginLocator = page.locator('a._1jKL3b');

let isAppeared = false;

try {
    // wait max 2 seconds because the element disappears quickly
    await loginLocator.waitFor({ timeout: 2000 });
    isAppeared = true;
} catch (e) {
    isAppeared = false;
}

// Print result
if (isAppeared) {
    console.log("Temporary Login link (_1jKL3b) appeared.");
} else {
    console.log("Temporary Login link did NOT appear.");
}


})
test.only('Search Test',async ({page})=>{

    const homepage=new HomePage(page);
    await homepage.navigateToHomePage();
    await page.locator('//input[contains(@title,"Search")]').fill("Hello");





}
)