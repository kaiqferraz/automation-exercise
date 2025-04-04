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

# Executando os Testes 🚀

Abrindo a interface do Cypress, execute:

```
$ npm run cypress:open
```

Executar os Testes em Modo Headless ⚡
Para rodar os testes em modo headless, utilize:

```
$ npx cypress run
```

# Cenários de Teste Implementados 🔍

Login: Testa o login com credenciais válidas.
Busca de Produtos: Realiza a busca de produtos e valida os resultados.
Adicionar Produto ao Carrinho: Adiciona produtos ao carrinho e valida a inclusão.
Validar Produtos no Carrinho: Valida os nomes e preços dos produtos no carrinho.

# Tecnologias Utilizadas 🛠️

Cypress: Framework de automação de testes.
Cypress Cucumber Preprocessor: Suporte a BDD com Gherkin.
JavaScript: Linguagem de programação utilizada no projeto.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Autor: Kaique Ferraz da Silva ```
