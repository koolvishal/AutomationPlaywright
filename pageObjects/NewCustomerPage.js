
class NewCustomerPage{

    constructor(page)
    {
        this.page=page;
        this.lblAddNewCustomer=page.locator("//p[contains(text(),'Add New Customer')]");
        this.txtCustName=page.locator("//input[@name='name']");
        this.chkMale=page.locator("//input[@value='m']");
        this.chkFemale=page.locator("//input[@value='f']");
        this.datePicker=page.locator("//input[@id='dob']");
        this.txtAddress=page.locator("//textArea[@name='addr']");
        this.txtCity=page.locator("//input[@name='city']");
        this.txtState=page.locator("//input[@name='state']");
        this.txtPIN=page.locator("//input[@name='pinno']");
        this.txtMobileNo=page.locator("//input[@name='telephoneno']");
        this.txtEmail=page.locator("//input[@name='emailid']");
        this.txtPasswordForCust=page.locator("//input[@name='password']");
        this.btnSubmit=page.locator("//input[@value='Submit']");
        this.btnReset=page.locator("//input[@value='Reset']");

    }

    async getAddNewCustomerlbl()
    {
        //return await this.lblAddNewCustomer.textContent();
        return await this.page.locator("//p[contains(text(),'Add New Customer')]");
    }
    async EnterCustName(custname)
    {
        await this.txtCustName.fill(custname);
    }

    async CheckGender(gender)
    {
        if(gender=="Male")
           await this.chkMale.check();
        else
            await this.chkFemale.check();
    }

    async EnterDate(date)
    {
        await this.datePicker.fill(date);
        
    }

    async EnterAddress(address)
    {
        await this.txtAddress.fill(address);
    }

    async EnterCity(city)
    {
        await this.txtCity.fill(city);
    }

    async EnterState(state)
    {
        await this.txtState.fill(state);
    }

    async EnterPIN(PIN)
    {
        await this.txtPIN.fill(PIN);
    }

    async EnterMobileNo(mobileNo)
    {
        await this.txtMobileNo.fill(mobileNo);
    }

    async EnterEmail(emailid)
    {
        await this.txtEmail.fill(emailid);
    }

    async EnterPwdForCust(pwd)
    {
        await this.txtPasswordForCust.fill(pwd);
    }

    async ClickSubmitForCust()
    {
        await this.btnSubmit.click();
    }

    async ClickResetForCust()
    {
        await this.btnReset.click();
    }

}
module.exports={NewCustomerPage}