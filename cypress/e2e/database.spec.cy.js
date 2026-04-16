describe('Banco de Dados', () => {
  beforeEach('Login',() => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]').type('qa@test.com')
    cy.get('input[type="password"]').type('123456')
    cy.contains('Entrar').click()
    cy.contains('Continuar').click()
  })

  it('Deve criar um novo banco de dados', () => {
    cy.get(".cursor-pointer").click()
    cy.get("a[href='/dashboard/campanha/bancos-de-dados']").click() // clicar no menu de banco de dados
    cy.contains('Criar').click()
    cy.get('.ng-invalid').type('Banco criado automaticamente')
    cy.contains('Salvar').click()

    // validar que aparece na lista
    cy.contains('Banco criado automaticamente').should('be.visible')
  })

  it('BUG: Dados somem ao atualizar', () => {
    cy.get(".cursor-pointer").click()
    cy.get("a[href='/dashboard/campanha/bancos-de-dados']").click() // clicar no menu de banco de dados
    cy.contains('Criar').click()
    cy.get('.ng-invalid').type('Teste Refresh')
    cy.contains('Salvar').click()
    cy.contains('Teste Refresh').should('be.visible')

  // clicar no atualizar (refresh)
    cy.get('[data-variant="icon"]').eq(2).click() // ajustar seletor

  // BUG: deveria existir
    cy.contains('Teste Refresh').should('be.visible')
})
})