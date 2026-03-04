Feature: Login OrangeHRM

  Scenario: Login valid
    Given User membuka halaman login
    When User login dengan username "Admin" dan password "admin123"
    Then Login berhasil

  Scenario: Login invalid
    Given User membuka halaman login
    When User login dengan username "Admin" dan password "salah123"
    Then Muncul pesan error