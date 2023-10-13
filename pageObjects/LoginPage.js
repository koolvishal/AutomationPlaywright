class Loginpage{

constructor(page)
{
    this.page=page;
    this.txtusername=page.locator("//input[@name='uid']");
    this.txtpassword=page.locator("//input[@name='password']");
    this.btnLogin=page.locator("//input[@name='btnLogin']");
}

async openURL(URL)
{
    await this.page.goto(URL);
}

async verifyLogin(username,password)
{
    await this.txtusername.fill(username);
    await this.txtpassword.fill(password);
    await this.btnLogin.click();
}

}
module.exports={Loginpage}