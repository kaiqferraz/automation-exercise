Feature: Incluir produto no carrinho de compras

    Scenario: Usuário insere produto no carrinho de compras

        Given que o usuário acessa a página de produtos
        When o usuário seleciona um produto e define a quantidade desejada
        And adiciona o produto ao carrinho
        Then o sistema valida que o produto foi adicionado com sucesso