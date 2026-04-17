import userData from '../fixtures/UserData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()

describe('Login - Validação de Autenticação', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Deve exibir erro ao tentar login com credenciais inválidas', () => {
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })


  it('Deve realizar login com sucesso e acessar o dashboard', () => {
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    
    // comportamento inesperado identificado durante o teste
    cy.contains('Seu login está incorreto').should('be.visible')
    cy.contains('Continuar').click()
    cy.url().should('include', 'dashboard')
  })

  
  it('BUG: Sistema exibe erro mesmo com credenciais válidas', () => {
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

    // BUG: mensagem não deveria aparecer, comportamento inesperado identificado.
    cy.contains('Seu login está incorreto').should('be.visible')
    
  })

})
