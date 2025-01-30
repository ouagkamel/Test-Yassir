const { Given, When, Then } = require('@cucumber/cucumber');
const {  By, until } = require('selenium-webdriver');
const { waitForElementToDisappear, ScrollToElement, uploadFile } = require('../utils');
const { getDriver } = require('../driverManager');
const assert = require('assert');



When('I click on parametres', async function () {
    await waitForElementToDisappear(this.driver, By.xpath('//*[@id="loader-wrapper-outlet"]'));     
const Menuservice = await this.driver.findElement(By.css('#navbarSide > ul:nth-child(2) > li:nth-child(11) > a'));
await Menuservice.click();
});

When('I click on my account toggle to uncheck it',{timeout: 10 * 1000}, async function (){
    let toggle = await this.driver.wait(until.elementLocated(By.xpath('/html/body/app-root/div/div/main/div/div[4]/app-client/app-display-settings/div/div/form/div[2]/div/div/div[1]/div/div[2]/span')),5000);
await toggle.click(); 
    
});

When('I click on save', async function () {
    const save = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-display-settings > div > div > form > div.col-12.text-right.mt-3 > input'));
  await save.click();
    
     
});

When('I clique on continue',{timeout: 10 * 1000}, async function () {
    let modal = await this.driver.wait(until.elementLocated(By.css('#modal-confirmModal > div > div')), 5000);
    await this.driver.wait(until.elementIsVisible(modal), 5000);
const continuer = await this.driver.findElement(By.css('#modal-confirmModal > div > div > div.modal-footer.text-center.mb-3 > button'));
await this.driver.sleep(1000);
await continuer.click();

   
});

Then('I should be redirected to the home page', async function () {
let currentUrl = await this.driver.getCurrentUrl();
        if (currentUrl.includes('/client/dashboard')) {
            console.log("Successfully redirected to the home page!");
        } else {
            console.log("Not redirected to home page.");
        }
    });