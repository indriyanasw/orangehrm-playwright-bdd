@admin
Feature: Admin Search User Role

  Scenario Outline: Admin search user by role
    Given User berada di halaman Admin
    When User memilih role "<role>"
    And User klik search
    Then Data dengan role "<role>" muncul

    Examples:
      | role  |
      | Admin |
      | ESS   |