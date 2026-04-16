# 🧪 Teste QA - Colmeia

Este repositório contém a execução de testes manuais e automatizados realizados para o desafio técnico de QA da Colmeia.

---

## 📌 Objetivo

Explorar a aplicação fornecida, identificar inconsistências e garantir a qualidade do sistema através de:

* Testes exploratórios
* Criação de casos de teste
* Registro de bugs
* Automação de testes com Cypress

---

## 🔍 Escopo dos Testes

### 🔐 Login

* Validação de campos obrigatórios
* Validação de formato de email
* Login com credenciais válidas e inválidas
* Comportamento do sistema após autenticação

### 📊 Dashboard

* Carregamento da tela
* Navegação entre menus
* Interações com elementos visíveis

### 🗄️ Banco de Dados

* Criação de bancos
* Listagem de dados
* Busca
* Atualização (refresh)
* Arquivamento e exclusão

---

## 🐞 Bugs Encontrados

Foram identificados diversos problemas, incluindo:

* ❌ Login com erro mesmo com credenciais válidas
* ❌ Dados desaparecem ao atualizar (refresh)
* ❌ Permite criação de nomes duplicados
* ❌ Arquivamento não funciona corretamente
* ❌ Link de recuperação de senha não funcional

📄 Detalhes completos em: `bugs.md`

---

## 🧪 Casos de Teste

Os cenários de teste foram documentados com base em testes exploratórios, cobrindo fluxos principais e validações do sistema.

📄 Ver arquivo: `test-cases.md`

---

## 🤖 Testes Automatizados

Foram implementados testes automatizados utilizando Cypress para validar funcionalidades principais:

* Login
* Criação de banco de dados
* Validação de comportamento do sistema

---

## ⚙️ Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js

---

## ▶️ Como Executar o Projeto

### 1. Clonar repositório

```bash
git clone https://github.com/Brunnobs/teste-QA.git
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Executar Cypress

```bash
npx cypress open
```

ou modo headless:

```bash
npx cypress run
```

---

## 📂 Estrutura do Projeto

```
qa-colmeia-test
 ├── README.md
 ├── bugs.md
 ├── test-cases.md
 ├── cypress/
 │    └── e2e/
 │         ├── login.spec.js
 │         └── database.spec.js
 └── evidencias/
```

---

## 📸 Evidências

As evidências dos bugs (prints) estão disponíveis na pasta:

📁 `evidencias/`

---

## 👨‍💻 Autor

Bruno Barbosa de Souza
🔗 GitHub: https://github.com/Brunnobs
🔗 LinkedIn: https://linkedin.com/in/brunobbss

---

## 🚀 Considerações Finais

O projeto foi desenvolvido com foco em identificar falhas reais do sistema, documentar de forma clara e aplicar boas práticas de QA.

Além dos testes manuais, foram adicionados testes automatizados para reforçar a validação das funcionalidades críticas.
