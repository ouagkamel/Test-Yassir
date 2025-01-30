# 🚀 Yassir Automation Test

## 📖 Description
In this test i automated 2 features from Gulf Bank Algeria web application

 🎯 Features
- ✅ Feature 1 : transfer money from an account to another
- ✅ Feature 2 : disable toggle from parameters to hide accounts information in the dashboard

## 🛠️ Installation
Follow these steps to set up the project locally.

### **Prerequisites**
Ensure you have the following installed:
- [Node.js]
- Cucumber version 11.2.0
- Selenium webdriver version 4.28.1


### **Setup Instructions**
1. Open the folder with Visual studio code
2. Execute in the terminal :  npm install --save-dev @cucumber/cucumber


Run the project:
Feature 1 : npx cucumber-js --tags "@BankTransfer"
Feature 2 : npx cucumber-js --tags "@HideMyAccountsInDashboard"

🏗️ Project Structure

/Yassir
│── features/          # Contains feature files
│── step_definitions/  # JavaScript files that implement the steps from feature files
│── src/               # To store some files
│── README.md          # Documentation
│── package.json       # dependencies and scripts
│── cucumber.js        # Cucumber options
│── drivermanager.js   # Initializes selenium sebDriver
│── utils.js           # Stores helper and common functions



