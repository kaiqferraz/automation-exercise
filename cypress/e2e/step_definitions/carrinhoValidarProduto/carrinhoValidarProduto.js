import CarrinhoValidarProduto from "../../../poo/carrinhoValidarProduto.po";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("que o usuário acessa a página de produtos", () => {
  cy.autenticar();

  cy.visit(Cypress.env("BASE_URL") + "/products");
});

When("o usuário adiciona todos os produtos desejados ao carrinho", () => {
  CarrinhoValidarProduto.btnAddToCartPorNome("Blue Top").click();
  CarrinhoValidarProduto.btnContinueShopping()
    .contains("Continue Shopping")
    .click();

  CarrinhoValidarProduto.btnAddToCartPorNome("Men Tshirt").click();
  CarrinhoValidarProduto.btnContinueShopping()
    .contains("Continue Shopping")
    .click();

  CarrinhoValidarProduto.btnAddToCartPorNome("Sleeveless Dress").click();
  CarrinhoValidarProduto.btnContinueShopping()
    .contains("Continue Shopping")
    .click();
});

And("acessa o carrinho", () => {
  cy.visit(Cypress.env("BASE_URL") + "/view_cart");
});

Then("o sistema valida o nome e o preço dos produtos no carrinho", () => {
  CarrinhoValidarProduto.validarNomeProduto().contains("Blue Top");
  CarrinhoValidarProduto.validarPrecoProduto().contains("500");

  CarrinhoValidarProduto.validarNomeProduto().contains("Men Tshirt");
  CarrinhoValidarProduto.validarPrecoProduto().contains("400");

  CarrinhoValidarProduto.validarNomeProduto().contains("Sleeveless Dress");
  CarrinhoValidarProduto.validarPrecoProduto().contains("1000");
});
