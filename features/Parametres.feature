@HideMyAccountsInDashboard
Feature: Hide my accounts information from the dashboard


  Scenario: disabling my account toggle in the parameters
    Given I am in the home page 
    When I click on "Démo de l'application"  
    And I click on parametres
    And I click on my account toggle to uncheck it
    And I click on save
    And I clique on continue
    Then I should be redirected to the home page 