Feature: Multi Language

I want to change language from VN to EN

@focus
Scenario: Change Language
	When I access Home page
	Then I should see title "Bài hát" by default
	When I select EN to change language to English in header
	Then I should see title "Songs"