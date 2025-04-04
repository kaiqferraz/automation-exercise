class CarrinhoValidarProduto {
  btnAddToCartPorNome(nome) {
    return cy.contains("p", nome).parents(".productinfo").find("a.add-to-cart");
  }

  btnContinueShopping() {
    return cy.get(".col-sm-4").get(".btn.btn-success.close-modal.btn-block");
  }

  validarNomeProduto() {
    return cy.get("#cart_info").find(".cart_description").find("h4 a");
  }

  validarPrecoProduto() {
    return cy.get("#cart_info").find(".cart_price").find("p");
  }
}
export default new CarrinhoValidarProduto();
