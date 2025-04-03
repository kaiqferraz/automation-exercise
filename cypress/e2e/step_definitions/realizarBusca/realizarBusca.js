import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import RealizarBusca from "../../../poo/realizarBusca.po";

Given("o usuario visita a pagina de produtos", () => {
  cy.autenticar();
  cy.visit(Cypress.env("BASE_URL") + "/products");
});

And("o usuario preenche o produto na pesquisa", () => {
  RealizarBusca.pesquisaProduto().type("Blue Top");
});

When("o usuario clica no botão de pesquisa", () => {
  RealizarBusca.btnPesquisar().click();
});

Then("o sistema deve retornar o produto relacionado a pesquisa", () => {
  RealizarBusca.validaNomeProduto().contains("Blue Top");
});
