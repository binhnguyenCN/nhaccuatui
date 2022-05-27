Feature: Navigation

Scenario: Redirect to About page
	When I access homepage
	When I click to about link in header
	Then I was redirected from Home page to About page
