class ManagerHomePage{

    constructor(page)
    {
        //this.tabNewCustomer=page.locator("//a[contains(text(),'New Customer')]");
        this.tabNewCustomer=page.locator("//ul[@class='menusubnav']//li[2]");

    }

    async ClickOnNewCustomertab()
    {
        await this.tabNewCustomer.click();
    }

}
module.exports={ManagerHomePage};