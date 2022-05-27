Feature: Pagination in New Release

Background: Access Home page
	Given I access homepage

Scenario: Move between pages by click
	When I click to next button
	Then I was moved to next page

Scenario: Move between pages by press key
	When I scroll to New Release
	And I hover in New Release
	When I press PageDown key
	Then I was moved to next page
	When I press PageUp key
	Then I was returned to prev page