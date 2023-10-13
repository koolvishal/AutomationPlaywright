import {test,expect} from "@playwright/test";
const{Loginpage}=require("../pageObjects/LoginPage");
const loginTestData = JSON.parse(JSON.stringify(require("../utils/LoginTestData.json")));


for(const logindata of loginTestData)
{
    test(`Valid Login test ${logindata.username}`,async({page})=>{

        console.log("This is login Test");
        const loginPage=new Loginpage(page);
        await loginPage.openURL(logindata.url);
        await loginPage.verifyLogin(logindata.username,logindata.password);
        await expect(page).toHaveTitle(logindata.expectedTitle);

    })


    test(`InValid Login test ${logindata.username}`,async({page})=>{

        const loginPage=new Loginpage(page);
        await loginPage.openURL(logindata.url);
        await loginPage.verifyLogin(logindata.username,logindata.password);

    })
}