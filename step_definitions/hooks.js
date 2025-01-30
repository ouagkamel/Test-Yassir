const { Before, AfterAll } = require('@cucumber/cucumber');
const { getDriver, quitDriver } = require('../driverManager');

Before(async function () {
  this.driver = await getDriver();
  
});

AfterAll(async function () {
  await quitDriver();
});