# 🧪 QA - Colmeia (Automação com Cypress)

Este projeto apresenta a automação de testes end-to-end utilizando **Cypress**, com foco na validação de funcionalidades críticas e identificação de comportamentos inesperados na aplicação.

---

## 🎯 Objetivo

Validar o sistema através de testes automatizados, garantindo:

* Cobertura de fluxos principais
* Validação de regras de negócio
* Identificação e evidência de bugs
* Organização e boas práticas de automação

---

## 🧰 Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Page Object Pattern

---

## 📂 Estrutura do Projeto
```
cypress
 ├── e2e
 │    ├── login.cy.js
 │    ├── database.cy.js
 │
 ├── pages
 │    ├── loginPage.js
 │    ├── databasePage.js
 │
 ├── fixtures
 │    ├── UserData.json
```

---

## 🧠 Estratégia de Automação

Os testes foram desenvolvidos com base em uma abordagem **exploratória + automatizada**, priorizando:

* Fluxos críticos da aplicação (login e gerenciamento de banco)
* Cenários positivos e negativos
* Identificação de inconsistências reais

A automação foi estruturada utilizando **Page Object Pattern**, promovendo:

* Reutilização de código
* Facilidade de manutenção
* Separação entre lógica de teste e interação com a interface

---

## 🔐 Funcionalidades Testadas

### Login

* Login com credenciais válidas
* Login com credenciais inválidas
* Validação de mensagens de erro

### Banco de Dados

* Criação de banco
* Listagem de bancos
* Atualização (refresh)
* Arquivamento
* Validação de duplicidade

---

## 🐞 Bugs Identificados

### ❌ BUG 1 — Login inconsistente

* Mesmo com credenciais válidas, o sistema exibe:
  **"Seu login está incorreto"**
* Após clicar em **"Continuar"**, o acesso ao dashboard é realizado

---

### ❌ BUG 2 — Dados desaparecem ao atualizar

* Após criar um banco de dados
* Ao clicar no botão de refresh
* Os dados desaparecem da lista

---

### ❌ BUG 3 — Permite criação de bancos duplicados

* O sistema permite criar múltiplos bancos com o mesmo nome
* Não há validação de unicidade

---

### ❌ BUG 4 — Arquivamento incorreto

* Ao arquivar um banco de dados
* O item não aparece na lista de arquivados
* O sistema remove permanentemente

---

## ⚠️ Observações Importantes

* Alguns testes automatizados foram desenvolvidos para **evidenciar bugs**
* Esses testes podem falhar propositalmente, pois validam o comportamento esperado do sistema
* A falha dos testes indica inconsistências reais da aplicação

---

## ▶️ Como Executar o Projeto

### 1. Clonar repositório

bash
git clone https://github.com/Brunnobs/teste-QA.git

### 2. Instalar dependências
bash
npm install
### 3. Executar Cypress
bash
npx cypress open
ou modo headless:
bash
npx cypress run

--- 

## 📌 Boas Práticas Aplicadas 
* Page Object Pattern
* Separação de responsabilidades
* Uso de fixtures para dados de teste *
* Testes claros e objetivos *
*  Validação de comportamento esperado vs atual

--- 

## 👨‍💻 Autor Bruno Barbosa de Souza 🔗 https://github.com/Brunnobs -

--- 

## 🚀 Considerações Finais O projeto foi desenvolvido com foco em demonstrar habilidades práticas em QA, incluindo: 
* Pensamento crítico *
* Identificação de falhas reais *
* Automação de testes *
* Organização e clareza na documentação A proposta foi não apenas validar o sistema, mas também evidenciar problemas relevantes que impactam a experiência do usuário.
