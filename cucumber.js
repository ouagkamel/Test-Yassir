module.exports = {
    default: {
       //timeout: 10000,
      require: ['step_definitions/**/*.js','step_definitions/hooks.js'], 
      format: ['progress', 'json:reports/cucumber-report.json'], 
      paths: ['features/**/*.feature'], 
      //tags: '@BankTransfer or @HideMyAccountsInDashboard',
    },
  };