const{test,expect}=require("@playwright/test");
const{NewCustomerPage}=require("../pageObjects/NewCustomerPage");
const{Loginpage}=require("../pageObjects/LoginPage");
const{ManagerHomePage}=require("../pageObjects/ManagerHomePage");
const loginTestData = JSON.parse(JSON.stringify(require("../utils/LoginTestData.json")));
const newCustomerTestdata = JSON.parse(JSON.stringify(require("../utils/NewCustomerTestData.json")));

for(const logindata of loginTestData)
{
test(`Create Customer Test ${logindata.username}`,async({page})=>{

    await page.waitForTimeout(3000);
    const loginPage=new Loginpage(page);
    await loginPage.openURL(logindata.url);
    await loginPage.verifyLogin(logindata.username,logindata.password);
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle(logindata.expectedTitle);;
    const managerHomePage = new ManagerHomePage(page);
    await managerHomePage.ClickOnNewCustomertab();
    await page.waitForTimeout(3000);
    await page.reload();
    await page.waitForTimeout(5000);
    await managerHomePage.ClickOnNewCustomertab();
    await page.waitForTimeout(5000);
    const newCustPage=new NewCustomerPage(page);
    expect(await page.locator("//p[contains(text(),'Add New Customer')]").textContent()).toEqual("Add New Customer");
    await newCustPage.EnterCustName(newCustomerTestdata.customername);
    await newCustPage.CheckGender("Male");
    await newCustPage.EnterDate(newCustomerTestdata.date);
    await newCustPage.EnterAddress(newCustomerTestdata.address);
    await newCustPage.EnterCity(newCustomerTestdata.city);
    await newCustPage.EnterState(newCustomerTestdata.state);
    await newCustPage.EnterPIN(newCustomerTestdata.pincode);
    await newCustPage.EnterMobileNo(newCustomerTestdata.mobile);
    await newCustPage.EnterEmail(newCustomerTestdata.email);
    await newCustPage.EnterPwdForCust(newCustomerTestdata.customerpassword);
    await page.waitForTimeout(3000);
    await newCustPage.ClickSubmitForCust();
    
})
}