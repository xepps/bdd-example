Feature: Adding some numbers
    As a mathematician
    In order to correctly do my sums
    I want to be able to add some numbers reliably

    Scenario: Add two numbers
    Given I have my calculator open
    When I press the keys "2" "add" "2"
    Then I should get the answer "4"

    # Scenario: Subtracting two numbers
    # Given I have my calculator open
    # When I press the keys "5" "subtract" "3"
    # Then I should get the answer "2"

    # Scenario: Multiplying two numbers
    # Given I have my calculator open
    # When I press the keys "8" "multiply" "4"
    # Then I should get the answer "32"

    # Scenario: Dividing two numbers
    # Given I have my calculator open
    # When I press the keys "1" "8" "divide" "3"
    # Then I should get the answer "6"

    # Scenario: Invalid calculations
    # Given I have my calculator open
    # When I press the keys "1" "multiply" "divide" "3"
    # Then I should get the answer "0"

    # Scenario: Decimals mathematics
    # Given I have my calculator open
    # When I press the keys "dot" "5" "multiply" "2"
    # Then I should get the answer "1"