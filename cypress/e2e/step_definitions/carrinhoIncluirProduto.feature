Feature: Incluir produto no carrinho de compras

    Scenario: Usuário insere produto no carrinho de compras

        Given que o usuário visita a página de produtos
        When o usuário seleciona um produto
        And insere a quantidade desejada
        And adiciona o produto ao carrinho
        And o usuário verifica o carrinho de compras
        Then o sistema valida que o produto foi adicionado com sucesso


