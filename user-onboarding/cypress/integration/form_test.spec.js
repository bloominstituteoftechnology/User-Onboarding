describe ('Application tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const submitBtn = () => cy.get("button[id=submit]")
    const nameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const agreedInput = () => cy.get('input[name=agreed]')

    it('Elements showing on page', () => {
        submitBtn().should('exist')
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        agreedInput().should('exist')
    })

    it('Functionality of inputs', ()=>{
        nameInput()
            .type("Stav Corcos")
            .should('have.value', 'Stav Corcos')
        emailInput()
            .type('stavcorcos@gmail.com')
            .should('have.value', 'stavcorcos@gmail.com')
        passwordInput()
            .type('abc123')
        agreedInput()
            .click()
            .should('have.value', 'on')
        submitBtn().click()
    })

    it('Check form validation', ()=>{
        nameInput()
            .type("Stav Corcos")
            .clear()
        emailInput()
            .type('stavcorcos@gmail.com')
            .clear()
        passwordInput()
            .type('abc123')
            .clear()
        agreedInput().click().click()

        cy.contains('Username is required.')
        cy.contains('Email is required.')
        cy.contains('Password is required.')
        cy.contains('You must agree to the terms of service.')
    })
})
