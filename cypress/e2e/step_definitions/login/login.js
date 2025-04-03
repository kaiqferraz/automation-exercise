import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../poo/login.po";

Given("que o usuário visita a página de login", () => {
  cy.visit(Cypress.env("BASE_URL") + "/login");
});

When("o usuário preenche o campo de email", () => {
  Login.email().type("teste2024@teste.com.br");
});

And("o usuário preenche o campo de senha", () => {
  Login.senha().type("teste");
});

And("o usuário clica no botão de login", () => {
  Login.btnLogin().click();
});

Then("o sistema valida que o login foi realizado com sucesso", () => {
  Login.validarLogin().contains("Logged in as").should("be.visible");
});
