exports.HomePage=
class HomePage{
    constructor(page)
    {
        this.page=page;
        this.logo='//img[@title="Flipkart"]'
    }
    async navigateToHomePage()
    {
        await this.page.goto('https://www.flipkart.com/');
    }
    async getPageTitle()
    {
        return await this.page.title();
    }
    async isLogoVisible(){
        return await this.page.isVisible(this.logo);
        
    }
}