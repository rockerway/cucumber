Feature: Finding some keyword
  Check Google search page can input some keyword in search box, and key enter to search result

  Scenario Outline: Finding some keyword
    Given I am on the Google search page
    When I search for <keyword>
    Then the page title should start with <answer>

  Examples:
    | keyword | answer |
    | "Cheese!" | "cheese!" |

#  Scenario: Search button click
#    Given I am on the Google search page and no input in search box
#    When I click the search button
#    Then The page not change
