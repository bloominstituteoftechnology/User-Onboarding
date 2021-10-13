describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const pwInput = () => cy.get('input[name=password]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')
    
    it('Sanity check', () => {
        expect(1 + 2).to.equal(3)
    })

    describe('Filling out inputs', () => {
        it('Can type in the Name input', () => {
            nameInput()
                .should('have.value', '')
                .type('Nathan')
                .should('have.value', 'Nathan')
        })

        it('Can type in the Email input', () => {
            emailInput()
                .should('have.value', '')
                .type('example@email.com')
                .should('have.value', 'example@email.com')
        })

        it('Can type in the Password input', () => {
            pwInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
        })
    })

    describe('Can check terms of service box', () => {
        it('Can check terms of service box', () => {
            cy.get('[type="checkbox"]').check()
        })
    })

    describe('Checking if user can submit form data', () => {
        it('The submit button enables when all forms are filled out', () => {
            nameInput().type('Nathan')
            emailInput().type('example@email.com')
            pwInput().type('password')
            cy.get('[type="checkbox"]').check()
            submitBtn().should('not.be.disabled')
            submitBtn().click()
        })
    })

    describe('Check if input is left empty', () => {
        it('Check if input left empty check', () => {
            nameInput().type('Nathan')
            emailInput().type('example@email.com')
            cy.get('[type="checkbox"]').check()
            submitBtn().should('be.disabled')
        })
    })
})
