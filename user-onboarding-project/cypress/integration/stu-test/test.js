describe('User Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name="username"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const roleInput = () => cy.get('select[name="role"]')
    const termsInput = () => cy.get('input[name="terms"]')
    const submitButton = () => cy.get('button')

    it('can type a username', () => {
        usernameInput().type('studeez')
        usernameInput().should('have.value', 'studeez')
        usernameInput().should('not.have.value', 'arose')
    })

    it('can type in email', () => {
        emailInput().type('stu@deez.com')
        emailInput().should('have.value', 'stu@deez.com')
        emailInput().should('not.have.value', 'a@rose.com')
    })

    it('can type password', () => {
        passwordInput().type('passwordhere')
        passwordInput().should('have.value', 'passwordhere')
    })

    it('has role checked', () => {
        roleInput().select('Driver')
        roleInput().should('have.value', 'driver')
    })

    it('can check terms', () => {
        termsInput().click()
        termsInput().should('have.value', 'on')
    })

    it('can submit', () => {
        usernameInput().type('studeez')
        emailInput().type('stu@deez.com')
        passwordInput().type('passwordhere')
        roleInput().select('Driver')
        termsInput().click()
        submitButton().click()
    })

})