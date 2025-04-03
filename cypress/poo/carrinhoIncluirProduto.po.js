class CarrinhoIncluirProduto {
  SelecionaProduto() {
    return cy.get(".col-sm-4").find("a");
  }

  insereQuantidadeProduto() {
    return cy.get("#quantity");
  }

  insereQuantidadeProduto() {
    return cy.get("#quantity");
  }

  btnAddToCart() {
    return cy.get(".btn.btn-default.cart");
  }

  btnVisualizaCarrinhoIframe() {
    return cy.get(".modal-content").find("a");
  }

  validarProdutoAdicionado() {
    return cy.get("#cart_info").find(".cart_description").find("h4 a");
  }
}
export default new CarrinhoIncluirProduto();
