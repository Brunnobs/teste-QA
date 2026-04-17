class DatabasePage {

  selectors = {
    createButton:  'button:contains("Criar")',
    inputName: '.ng-invalid',
    saveButton: 'button:contains("Salvar")',
    databaseList: 'body',
    iconButtons: '[data-variant="icon"]',
    archivedButton: 'button:contains("Arquivados")'
  }

  clickCreate() {
    cy.get("[type='button']").eq(4).click()
    
  }

  typeDatabaseName(name) {
    cy.get(this.selectors.inputName).type(name)
  }

  clickSave() {
    cy.contains('Salvar').click()
  }

  createDatabase(name) {
    this.clickCreate()
    this.typeDatabaseName(name)
    this.clickSave()
  }

  validateDatabaseCreated(name) {
    cy.contains(name).should('be.visible')
  }

  clickRefresh() {
    cy.get(this.selectors.iconButtons).eq(2).click()
  }

  clickArchive() {
    cy.get(this.selectors.iconButtons).eq(1).click()
  }

  clickDelete() {
    cy.get(this.selectors.iconButtons).eq(2).click()
  }

  goToArchived() {
    cy.contains('Arquivados').click()
  }

}

export default DatabasePage