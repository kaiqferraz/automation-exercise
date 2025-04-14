# Projeto de Automação com Cypress

Este é um projeto de automação de testes utilizando o framework [Cypress](https://www.cypress.io/) e o plugin [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) para suporte a BDD com Gherkin.

## Pré-requisitos 📌

- Node.js instalado (versão recomendada: 16 ou superior)
- Gerenciador de pacotes `npm` ou `yarn`

## Instalação 📥

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

   ```

2. Instale as dependências:

```
 npm install
```

3. Configure as variáveis de ambiente no arquivo cypress.env.json:

```
{
"BASE_URL": "https://www.automationexercise.com",
"EMAIL": "seu-email@exemplo.com",
"PASSWORD": "sua-senha"
}
```

## Executando os Testes 🚀

Abrindo a interface do Cypress, execute:

```
$ npm run cypress:open
```

Executar os Testes em Modo Headless ⚡
Para rodar os testes em modo headless, utilize:

```
$ npx cypress run
```

## Cenários de Teste Implementados 🔍

_Login:_ Testa o login com credenciais válidas.

_Busca de Produtos:_ Realiza a busca de produtos e valida os resultados.

_Adicionar Produto ao Carrinho:_ Adiciona produtos ao carrinho e valida a inclusão.

_Validar Produtos no Carrinho:_ Valida os nomes e preços dos produtos no carrinho.

## Tecnologias Utilizadas 🛠️

_Cypress:_ Framework de automação de testes.

_Cypress Cucumber Preprocessor:_ Suporte a BDD com Gherkin.

_JavaScript:_ Linguagem de programação utilizada no projeto.

_Autor:_ Kaique Ferraz da Silva  

