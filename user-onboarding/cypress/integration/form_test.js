describe('Form Test', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const firstInput = () => cy.get('input[name=first_name]')
    const lastInput = () => cy.get('input[name=last_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=termsOfService]')
    const submitButton = () => cy.get('button')

    it('checking existence and state', () => {
        firstInput().should('exist').should('have.value','')
        lastInput().should('exist').should('have.value','')
        emailInput().should('exist').should('have.value','')
        passInput().should('exist').should('have.value','')
        termsInput().should('exist').should('not.be.checked')
        submitButton().should('exist').should('be.disabled')
    })

    it('checking input and submit', () => {
        firstInput().type('testFirst').should('have.value','testFirst')
        lastInput().type('testLast').should('have.value','testLast')
        emailInput().type('testEmail@email.com').should('have.value','testEmail@email.com')
        passInput().type('testPassword').should('have.value','testPassword')
        termsInput().check().should('be.checked')
        submitButton().should('not.be.disabled').click().should('be.disabled')
        firstInput().should('exist').should('have.value','')
        lastInput().should('exist').should('have.value','')
        emailInput().should('exist').should('have.value','')
        passInput().should('exist').should('have.value','')
        termsInput().should('exist').should('not.be.checked')    

    })
})