class RealizarBusca {
  pesquisaProduto() {
    return cy.get("#search_product");
  }

  btnPesquisar() {
    return cy.get("#submit_search");
  }

  validaNomeProduto() {
    return cy.get(".col-sm-4").get("p");
  }
}

export default new RealizarBusca();
