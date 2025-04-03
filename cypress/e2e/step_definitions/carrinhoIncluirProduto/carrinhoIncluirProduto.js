import CarrinhoIncluirProduto from "../../../poo/carrinhoIncluirProduto.po";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário visita a página de produtos", () => {
  cy.autenticar();
  cy.visit(Cypress.env("BASE_URL") + "/products");
});

When("o usuário seleciona um produto", () => {
  CarrinhoIncluirProduto.SelecionaProduto().contains("View Product").click();
});

And("insere a quantidade desejada", () => {
  CarrinhoIncluirProduto.insereQuantidadeProduto().type(
    "{selectall}{backspace}2"
  );
});

And("adiciona o produto ao carrinho", () => {
  CarrinhoIncluirProduto.btnAddToCart().click();
});

And("o usuário verifica o carrinho de compras", () => {
  CarrinhoIncluirProduto.btnVisualizaCarrinhoIframe()
    .contains("View Cart")
    .click();
});

Then("o sistema valida que o produto foi adicionado com sucesso", () => {
  CarrinhoIncluirProduto.validarProdutoAdicionado().contains("Blue Top");
});
