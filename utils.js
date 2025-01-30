const { until } = require('selenium-webdriver');
const path = require('path');

async function waitForElementToDisappear(driver, locator, timeout = 10000) {
  await driver.wait(until.elementLocated(locator), timeout);
  let element = await driver.findElement(locator);
  return driver.wait(until.stalenessOf(element), timeout);
}

async function ScrollToElement(driver, element) {
  await driver.executeScript("arguments[0].scrollIntoView(true);", element);
  await driver.wait(until.elementIsVisible(element), 5000);
}


async function uploadFile(fileInput) {
  
      const filePath = path.join(process.cwd(), 'src/test.png');
      await fileInput.sendKeys(filePath);
      console.log("File has been uploaded successfully!");
}

module.exports = { waitForElementToDisappear,ScrollToElement, uploadFile };