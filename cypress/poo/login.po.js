class Login {
  email() {
    return cy.get('input[data-qa*="login-email"]');
  }

  senha() {
    return cy.get('input[data-qa*="login-password"]');
  }

  btnLogin() {
    return cy.get('button[data-qa*="login-button"]');
  }

  validarLogin() {
    return cy.get("body");
  }
}

export default new Login();
