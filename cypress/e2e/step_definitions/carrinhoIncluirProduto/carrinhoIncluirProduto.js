import CarrinhoIncluirProduto from "../../../poo/carrinhoIncluirProduto.po";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário acessa a página de produtos", () => {
  cy.autenticar();
  cy.visit(Cypress.env("BASE_URL") + "/products");
});

When("o usuário seleciona um produto e define a quantidade desejada", () => {
  CarrinhoIncluirProduto.SelecionaProduto().contains("View Product").click();

  CarrinhoIncluirProduto.insereQuantidadeProduto().type(
    "{selectall}{backspace}2"
  );
});

And("adiciona o produto ao carrinho", () => {
  CarrinhoIncluirProduto.btnAddToCart().click();
});

Then("o sistema valida que o produto foi adicionado com sucesso", () => {
  CarrinhoIncluirProduto.btnVisualizaCarrinhoIframe()
    .contains("View Cart")
    .click();

  CarrinhoIncluirProduto.validarProdutoAdicionado().contains("Blue Top");
});
