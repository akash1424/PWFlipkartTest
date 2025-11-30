exports.HomePage=
class HomePage{
    constructor(page)
    {
        this.page=page;
        this.logo='//a[@id="nav-logo-sprites"]'
    }
    async navigateToHomePage()
    {
        await this.page.goto('https://www.amazon.in/');
    }
    async getPageTitle()
    {
        return await this.page.title();
    }
    async isLogoVisible(){
        return await this.page.isVisible(this.logo);
        
    }
}