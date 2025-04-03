Feature: Realizar busca


    Scenario: Usuário realiza busca de um produto

        Given o usuario visita a pagina de produtos
        And o usuario preenche o produto na pesquisa
        When o usuario clica no botão de pesquisa
        Then o sistema deve retornar o produto relacionado a pesquisa
