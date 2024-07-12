Feature: Smoke tests

  Scenario Outline: MY_TC_1 - simple demo
    Given go to homepage
    When login as <user>
    Then user is logged in

       Examples:
| 	role	 | 
| 	user1	 |
| 	user2	 |
