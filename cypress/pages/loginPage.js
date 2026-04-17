class LoginPage { 
    selectorsList() {
        const selectors = {
            usernameField: 'input[type="email"]',
            passwordField: 'input[type="password"]',
            loginButton: '[type="submit"]',
            wrongCredentialAlert: '[data-invalid="true"]',
        }
        return selectors
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')
    }

}

export default LoginPage