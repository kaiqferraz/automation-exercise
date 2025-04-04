Feature: Validar produtos no carrinho de compras

    Scenario: Validar produtos adicionados no carrinho de compras

        Given que o usuário acessa a página de produtos
        When o usuário adiciona todos os produtos desejados ao carrinho
        And acessa o carrinho
        Then o sistema valida o nome e o preço dos produtos no carrinho





