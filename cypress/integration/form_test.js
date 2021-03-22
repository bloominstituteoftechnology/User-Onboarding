describe('User Onboarding App', () => {

    // const textInput = () = cy.get('[name="text')
    
    // it('Adds 2 + 2', () => {
    //     expect(2 + 2).to.equal(4)
    // })

    const textInput = () => cy.get(':nth-child(1) > input')
    const emailInput = () => cy.get(':nth-child(2) > input')
    const passwordInput = () => cy.get(':nth-child(3) > input')
    const termsBox = () => cy.get(':nth-child(4) > input')
    const submitButton = () => cy.get('button')
    
    it('Visits User App site', () => {
        cy.visit('http://localhost:3000/')
    })

    it('renders properly', () => {
        textInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsBox().should('exist')
        submitButton().should('exist')
    })

    describe('Filling out user app', () => {
        it('can type in the inputs', () => {
            textInput()
            .should('have.value', '')
            .type('Niko')
            .should('have.value', 'Niko')

            emailInput()
            .should('have.value',  '')
            .type('niko@niko.com')
            .should('have.value', 'niko@niko.com')

            passwordInput()
            .should('have.value', '')
            .type('Abc123?!')
            .should('have.value', 'Abc123?!')
        })

        it('can click the terms box', () => {
            termsBox()
            .click()
        })

        it('can submit filled out form', () => {
            submitButton()
            .click()
        })
    })
})