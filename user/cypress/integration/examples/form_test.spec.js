

describe('Advance Forms', () => {
    beforeEach(() => cy.visit('http://localhost:3000'))
    describe('filling inputs and submit', () => {
        it('can type and see if the correct name', () => {
            cy.get('input[name=name]')
             .type('Remy Ratatouille')
             .should('have.value', 'Remy Ratatouille')
             cy.get('input[name=email]')
            .type('RemyLuvsCheese@Paris.com')
            cy.get('input[name=password]')
            .type('GourmetCheese')
            cy.get('input[name=terms]')
            .click()
            cy.get('#submit-btn')
            .click()
        })
    })
    describe('Filling out inputs and cancelling', () => {
        it('submit button is disabled', () => {
            cy.get('#submit-btn').should('be.disabled')
        })
    })
})