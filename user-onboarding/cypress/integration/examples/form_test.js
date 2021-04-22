describe('user onboarding', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termInput = () => cy.get('input[name=terms]')
    const buttonInput = () => cy.get('button')

    it('proper elements exist', () => {
        expect(5).to.equal(5)
        expect(5).to.eql(5)
        expect(5 + 1).to.not.equal(7)
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termInput().should('exist')
        buttonInput().should('exist')
    })

    describe('filling out inputs', () => {
        it('can type inside the inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('kaseem')
                .should('have.value', 'kaseem')
            emailInput()
                .should('have.value', '')
                .type('kaseembradley24@gmail.com')
                .should('have.value', 'kaseembradley24@gmail.com')
            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
        })
    })
})