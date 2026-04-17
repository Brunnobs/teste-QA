import userData from '../fixtures/UserData.json'
import LoginPage from '../pages/loginPage.js'
import DatabasePage from '../pages/databasePage'

const loginPage = new LoginPage()
const databasePage = new DatabasePage()


describe('Banco de Dados', () => {
  beforeEach('Login',() => {
    cy.visit('/')
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.contains('Continuar').click()
    cy.get("[type='button']").eq(0).click()
    cy.get("a[href='/dashboard/campanha/bancos-de-dados']").click()
  })

  it('Deve criar um novo banco de dados', () => {
    
    const name = 'Banco Teste'

    databasePage.createDatabase(name)
    databasePage.validateDatabaseCreated(name)
    
  })

  it('BUG: Dados somem ao atualizar', () => {
    
    const name = 'Teste Refresh'

    databasePage.createDatabase(name)
    databasePage.validateDatabaseCreated(name)
    databasePage.clickRefresh()

     // validação do comportamento esperado
     // teste falha devido a bug identificado na aplicação
    cy.contains(name).should('be.visible')
        
  })

  it('BUG: Permite criar bancos duplicados', () => {
    const name = 'Banco Duplicado'

    databasePage.createDatabase(name)
    databasePage.validateDatabaseCreated(name)
    databasePage.createDatabase(name)
    databasePage.validateDatabaseCreated(name)

    cy.get('tbody tr').then(($rows) => {
      const filtered = [...$rows].filter(row => row.innerText.includes(name))

      // BUG: deveria permitir apenas um com o mesmo nome, comportamento inesperado identificado.
      expect(filtered.length).to.equal(1)
    })
  })


  it('BUG: Arquivar não envia para lista de arquivados', () => {
    const name = 'Banco Arquivar'

    databasePage.createDatabase(name)

    databasePage.clickArchive()
    databasePage.goToArchived()

    // BUG: deveria aparecer o banco arquivado, comportamento inesperado identificado.
    cy.contains(name).should('be.visible')
  })

})