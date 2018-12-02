# ./feature/calculator.feature

Feature: Adding some numbers
    As a mathematician
    In order to correctly do my sums
    I want to be able to add some numbers reliably

    Scenario: Add two numbers
    Given I have my calculator open
    When I enter "2" "+" "2"
    Then I should get the answer "4"