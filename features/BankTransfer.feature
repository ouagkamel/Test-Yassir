@BankTransfer
Feature: New Bank Transfer AGB to AGB


  Scenario: Successful bank transfer
    Given I am in the home page 
    When I click on "Démo de l'application"
    And I click on mes virements
    And I click on effectuer un virement
    And i select type of transfer
    And I select my account 
    And I select the recipient's account
    And I select a date
    And I enter the transfer amount 
    And I enter the transfer amount confirmation
    And I attach a file
    And I click on valider
    And I click on confirmer
    Then I should see a confirmation message 