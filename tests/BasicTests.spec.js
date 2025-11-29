import {test,expect} from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Navigate to Flipkart Homepage',async ({page})=>{

    const homepage=new HomePage(page);
    await homepage.navigateToHomePage();


})