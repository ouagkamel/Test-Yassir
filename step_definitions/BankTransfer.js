const { Given, When, Then } = require('@cucumber/cucumber');
const {  By, until } = require('selenium-webdriver');
const { waitForElementToDisappear, ScrollToElement, uploadFile } = require('../utils');
const { getDriver } = require('../driverManager');
const assert = require('assert');

Given('I am in the home page',{timeout: 20 * 1000}, async function () {
  
  // <on some steps i set the tiemout cause it may take more than 5 seconds (default timeout) on some steps>
    await this.driver.wait(until.elementLocated(By.css('#demoSelect > div > div:nth-child(2) > div > button')), 10000);
    await this.driver.wait(until.elementLocated(By.css('body > div > div')), 10000).click();

    
  });
  
  When('I click on {string}',{timeout: 20 * 1000}, async function (buttonText) {
      
      const button = await this.driver.findElement(By.xpath(`//button[contains(text(), "${buttonText}")]`));
      await button.click();
      
  
      
    });
  
    When('I click on mes virements', async function () {
      
          // I first wait for the loader te disappear, then i click on my transfers menu
      await waitForElementToDisappear(this.driver, By.xpath('//*[@id="loader-wrapper-outlet"]'));
      const MenuTransfer = await this.driver.findElement(By.css('#navbarSide > ul:nth-child(2) > li:nth-child(4) > a'));
      await MenuTransfer.click();
    });
When('I click on effectuer un virement', async function () {
    // I first wait for the loader te disappear, then i click on the new transfer button
    await waitForElementToDisappear(this.driver, By.xpath('//*[@id="loader-wrapper-outlet"]'));
  const newTransferButton = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-transferts > div > div > div.row.mb-3.mt-2 > div > div.row.filter-list-component > div:nth-child(2) > div > a > button')); 
  await newTransferButton.click();
});

When('i select type of transfer', async function () {
  // I first wait for the loader te disappear, then i select the transfer type
    await waitForElementToDisappear(this.driver, By.xpath('//*[@id="loader-wrapper-outlet"]'));
    let dropdown = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-new-transfer > form > div.top-area-container.pt-3.pb-3.pl-3.pr-3.pr-sm-3.pl-sm-3.mb-3 > div > div.col-12.col-md-6.col-lg-6.col-xl-5.pt-3 > div > select'));
    await dropdown.sendKeys('Virement Autre compte AGB'); 
});

When('I select my account', async function () {
    // I first wait for the loader te disappear, then i select the account
    await waitForElementToDisappear(this.driver, By.xpath('//*[@id="loader-wrapper-outlet"]'));
    let dropdown = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-new-transfer > form > div.form.pt-1.pb-1.fz-18 > div > div > div.col-md-9.col-lg-8.col-xs-12.mb-3 > div:nth-child(2) > div:nth-child(1) > select'));
    await dropdown.sendKeys('03200000000123456789');
   
});

When('I select the recipient\'s account', async function () {
    let dropdown = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-new-transfer > form > div.form.pt-1.pb-1.fz-18 > div > div > div.col-md-9.col-lg-8.col-xs-12.mb-3 > div:nth-child(2) > div:nth-child(2) > select'));
    await dropdown.sendKeys('03200001118760120821 BeneficiaryName BeneficiaryLastName');
});

When('I select a date', async function () {
  const dateInput = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-new-transfer > form > div.form.pt-1.pb-1.fz-18 > div > div > div.col-md-9.col-lg-8.col-xs-12.mb-3 > div:nth-child(5) > div > input')); 
  await dateInput.sendKeys('01/30/2025'); 
  // I do scroll to the bottom of the page
  await this.driver.executeScript("window.scrollTo(0, document.body.scrollHeight);");
});

When('I enter the transfer amount', async function () {
  const amountInput = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-new-transfer > form > div.form.pt-1.pb-1.fz-18 > div > div > div.col-md-9.col-lg-8.col-xs-12.mb-3 > div:nth-child(6) > div:nth-child(1) > input')); 
  await amountInput.sendKeys('500'); 
});

When('I enter the transfer amount confirmation', async function () {
  const amountConfirmationInput = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-new-transfer > form > div.form.pt-1.pb-1.fz-18 > div > div > div.col-md-9.col-lg-8.col-xs-12.mb-3 > div:nth-child(6) > div:nth-child(2) > input')); 
  await amountConfirmationInput.sendKeys('500'); 
});

When('I attach a file', async function () {
  // I attach a document and i wait for the loader to disappear
    const fileInput = await this.driver.findElement(By.id('attachment1'));
    await uploadFile(fileInput);
    await waitForElementToDisappear(this.driver, By.xpath('//*[@id="loader-wrapper-outlet"]'));
});

When('I click on valider', async function () {
    const valider = await this.driver.findElement(By.css('#wrapper-outlet > div > div.col-12.p-0 > app-client > app-new-transfer > form > div.form.pt-1.pb-1.fz-18 > div > div > div.col-md-9.col-lg-8.col-xs-12.mb-3 > div.row.buttons.formio-buttons > div:nth-child(2) > button')); 
  await valider.click();
});

When('I click on confirmer', async function () {
  
  //I check for the popup then i click on confirmer button  
  let modal = await this.driver.wait(until.elementLocated(By.css('#modal-confirmModal > div > div')), 5000);
        await this.driver.wait(until.elementIsVisible(modal), 5000);
  const valider = await this.driver.findElement(By.css('#modal-confirmModal > div > div > div.modal-footer.text-center.mb-3 > button:nth-child(2)'));
  await valider.click();
});

Then('I should see a confirmation message', async function () {
  await this.driver.sleep(2000);
  //I wait a moment for the popup to appear, then i check if the text is correct
  let modal = await this.driver.wait(until.elementLocated(By.css('#modal-confirmModal > div > div')), 5000);
        await this.driver.wait(until.elementIsVisible(modal), 5000);
  const confirmationMessage = await this.driver.findElement(By.id('modal-confirmModal'));
  const messageText = await confirmationMessage.getText();
  assert.ok(messageText.includes('Nous vous remercions pour votre demande'), "Modal text does not contain 'message'");
  
});