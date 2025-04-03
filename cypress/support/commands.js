import Login from "../poo/login.po";

Cypress.Commands.add("autenticar", () => {
  const { EMAIL, PASSWORD, BASE_URL } = Cypress.env();
  cy.visit(`${BASE_URL}/login`);
  Login.email().type(EMAIL);
  Login.senha().type(PASSWORD);
});
