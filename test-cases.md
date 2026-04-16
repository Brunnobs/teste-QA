# Casos de Teste - Funcionalidade de Login e Dashboard

## 📌 Objetivo
Validar a funcionalidade de login, validações de campos e comportamento do sistema após autenticação (dashboard).

---

# 🔐 TESTES DE LOGIN

## ✅ CT01 - Login com campos vazios

**Passos:**
1. Acessar a tela de login
2. Não preencher email e senha
3. Clicar em "Entrar"

**Resultado Esperado:**
O sistema deve exibir mensagens indicando que os campos são obrigatórios

---

## ✅ CT02 - Login com apenas o email preenchido

**Passos:**
1. Inserir email válido (qa@test.com)
2. Deixar senha vazia
3. Clicar em "Entrar"

**Resultado Esperado:**
O sistema deve informar que a senha é obrigatória

---

## ✅ CT03 - Login com apenas a senha preenchida

**Passos:**
1. Deixar o campo email vazio
2. Inserir qualquer senha
3. Clicar em "Entrar"

**Resultado Esperado:**
O sistema deve informar que o email é obrigatório

---

## ✅ CT04 - Login com email inválido

**Passos:**
1. Inserir "teste" no campo email
2. Inserir qualquer senha
3. Clicar em "Entrar"

**Resultado Esperado:**
O sistema deve exibir mensagem de email inválido

---

## ✅ CT05 - Login com credenciais inválidas

**Passos:**
1. Inserir email válido (qa@test.com)
2. Inserir senha incorreta
3. Clicar em "Entrar"

**Resultado Esperado:**
O sistema deve exibir mensagem "Usuário ou senha inválidos"

---

## ✅ CT06 - Login com credenciais válidas

**Passos:**
1. Inserir email válido (qa@test.com)
2. Inserir senha válida (123456)
3. Clicar em "Entrar"

**Resultado Esperado:**
Usuário deve ser autenticado com sucesso e redirecionado para o dashboard

---

## ✅ CT07 - Login utilizando tecla Enter

**Passos:**
1. Preencher email e senha
2. Pressionar Enter

**Resultado Esperado:**
Sistema deve realizar login normalmente

---

## ✅ CT08 - Clique múltiplo no botão Entrar

**Passos:**
1. Preencher os dados
2. Clicar várias vezes no botão "Entrar"

**Resultado Esperado:**
Sistema deve processar apenas uma requisição e evitar múltiplos envios

---

## ✅ CT09 - Link "Esqueceu sua senha?"

**Passos:**
1. Clicar no link "Esqueceu sua senha?"

**Resultado Esperado:**
Sistema deve redirecionar para recuperação de senha

---

## ✅ CT10 - Validação de campo obrigatório ao perder foco

**Passos:**
1. Clicar no campo email
2. Sair do campo sem preencher

**Resultado Esperado:**
Sistema deve exibir mensagem de campo obrigatório


# 📊 TESTES DE DASHBOARD - CAMPANHA / BANCOS DE DADOS

## 📌 Objetivo
Validar os elementos visíveis e funcionalidades disponíveis no dashboard após login.

---

## ✅ CT11 - Carregamento inicial do dashboard

**Passos:**
1. Realizar login com sucesso
2. Acessar o dashboard

**Resultado Esperado:**
Dashboard deve carregar sem erros e apresentar estrutura básica da página

---

# 👤 TESTES DE USUÁRIO (MENU SUPERIOR)

## ✅ CT12 - Abertura do menu do usuário

**Passos:**
1. Clicar no nome "candidato" no canto superior

**Resultado Esperado:**
Sistema deve exibir opções do usuário (ex: perfil, logout)

---

## ✅ CT13 - Interação com opções do usuário

**Passos:**
1. Clicar nas opções exibidas no menu

**Resultado Esperado:**
Sistema deve executar a ação correspondente (ex: logout ou acesso ao perfil)

---

## ✅ CT14 - Exibição do menu lateral (ícone alto-falante)

**Passos:**
1. Clicar no ícone de menu (alto-falante)

**Resultado Esperado:**
Menu lateral deve ser exibido com opções disponíveis:
- Bancos de dados
- Colmeia Forms

---

## ✅ CT15 - Navegação para "Bancos de dados"

**Passos:**
1. Abrir menu lateral
2. Clicar em "Bancos de dados"

**Resultado Esperado:**
Sistema deve exibir a tela de listagem de bancos de dados

---

## ⚠️ CT16 - Navegação para "Colmeia Forms"

**Passos:**
1. Abrir menu lateral
2. Clicar em "Colmeia Forms"

**Resultado Esperado:**
Sistema deve carregar o formulário da Colmeia.


______________________________________________________________________________________

## 🗄️ Banco de Dados

## ✅ CT17 - Alternância entre listas

**Passos:**
1. Alternar entre lista normal e arquivados no icone de arquivo na barra superior

**Resultado Esperado:**
Sistema deve atualizar a visualização corretamente

## ✅ CT18 - Criação de banco de dados

**Passos:**
1. Clicar em "Criar"
2. Inserir nome do banco (Banco Cliente)
3. Confirmar criação
4. Clicar em "Criar"
5. Inserir nome do banco (Dados_Login)
6. Confirmar criação
7. Clicar em "Criar"
8. Inserir nome do banco (Base-Usuarios)
9. Confirmar criação
7. Clicar em "Criar"
8. Inserir nome do banco (Teste 01)
9. Confirmar criação

**Resultado Esperado:**
Os 4 Bancos devem ser criados e exibidos na lista

---

## ✅ CT19 - Busca de banco de dados

**Passos:**
1. Inserir nome no campo de busca (Dados_Login)

**Resultado Esperado:**
Sistema deve filtrar os resultados corretamente

---

## ✅ CT20 - Busca sem resultados

**Passos:**
1. Buscar nome inexistente

**Resultado Esperado:**
Sistema deve informar que nenhum resultado foi encontrado

---

## ✅ CT21 - Atualização da lista

**Passos:**
1. Clicar no botão de atualizar

**Resultado Esperado:**
Lista deve ser recarregada corretamente

---

## ✅ CT22 - Criação banco de dados duplicados

**Passos:**
1. Clicar em "Criar"
2. Inserir nome do banco (Cliente)
3. Confirmar criação
4. Clicar em "Criar"
5. Inserir nome do banco (Cliente)
6. Confirmar criação

**Resultado Esperado:**
Sistema deve impedir criação de nomes duplicados.

---

## ✅ CT23 - Arquivar banco de dados

**Passos:**
1. Criar um banco de dados
2. Clicar no ícone de arquivar ao lado do banco

**Resultado Esperado:**
Banco deve ser movido para a lista de arquivados

---

## ✅ CT24 - Deletar banco de dados

**Passos:**
1. Criar um banco de dados
2. Clicar no ícone de lixeira

**Resultado Esperado:**
Banco deve ser removido da lista