Feature: Watching clip
  As a user I want to watch created clips

  Background:
    Given I navigate to the login page
    And I log in to the home page

  Scenario: Watch first created clip
    When I click on My First Studio Video
    And I click on the play button
    Then I should see the video playing