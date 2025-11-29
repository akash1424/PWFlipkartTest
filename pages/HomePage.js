exports.HomePage=
class HomePage{
    constructor(page)
    {
        this.page=page;
    }
    async navigateToHomePage()
    {
        await this.page.goto('https://www.flipkart.com/');
    }
    async getPageTitle()
    {
        return await this.page.title();
    }
}