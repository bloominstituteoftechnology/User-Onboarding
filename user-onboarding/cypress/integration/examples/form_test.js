describe('New User App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('can type in the inputs'), () => {
        const passwordInput = cy.get(':nth-child(3) > input')

        cy.get(':nth-child(1) > input')
        .should('have.value', '')
        .type('Kelsey')
        .should('have.value', 'Kelsey')

        cy.get(':nth-child(2) > input')
        .should('have.value', '')
        .type('kelseywnielsen@gmail.com')
        .should('have.value', 'kelseywnielsen@gmail.com')

        cy.get(':nth-child(3) > input')
        .should('have.value', '')
        .type('Passw0rd!')
        .should('have.value', 'Passw0rd!')
    }

    it('disables submit button until all entries are filled in'), () => {
        cy.get('button').should('be.disabled')
        cy.get('.terms > input').check().should('be.checked')
        cy.get('button').should('not.be.disabled')
    }

    it('can submit new user', () => {
        cy.get(':nth-child(1) > input').type('Kelsey')
        cy.get(':nth-child(2) > input').type('kelseywnielsen@gmail.com')
        cy.get(':nth-child(3) > input').type('Passw0rd!')
        cy.get('.terms > input').check().should('be.checked')

        cy.contains(/Kelsey/).should('not.exist')
        cy.get('button').click()
        cy.contains(/Kelsey/).should('exist')
    })
})



