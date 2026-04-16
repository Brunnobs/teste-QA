describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('input[type="email"]').type('qa@test.com')
    cy.get('input[type="password"]').type('123456') // ajusta se necessário

    cy.contains('Entrar').click()

    // valida mensagem bugada (comportamento atual)
    cy.contains('Seu login está incorreto').should('be.visible')

    cy.contains('Continuar').click()

    // valida acesso ao dashboard
    cy.url().should('include', 'dashboard')
  })
})