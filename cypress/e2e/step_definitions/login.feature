Feature: Login

    Scenario: Usuário realiza login com credenciais válidas

        Given que o usuário visita a página de login
        When o usuário preenche o campo de email
        And o usuário preenche o campo de senha
        And o usuário clica no botão de login
        Then o sistema valida que o login foi realizado com sucesso