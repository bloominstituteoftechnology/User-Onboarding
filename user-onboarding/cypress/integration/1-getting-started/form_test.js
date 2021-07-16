
//describe
//it
//expect

describe('Form test', () => {
    it('test that form inputs are working', () => {
        cy.visit('http://localhost:3001/')

        // test for disabled button
        cy.get('button#submit')
        .should('be.disabled')

        // name input test
        cy.get('[for="name"] > input')
        .type('Dalian')
        .should('have.value', 'Dalian')

        // email input test
        cy.get('[for="email"] > input')
        .type('Dalian.Alexander@gmail.com')

        // password input test
        cy.get('[for="password"] > input')
        .type('password')

        // dropdown select
        cy.get('select')
        .select('FF14')

        // terms checkbox test
        cy.get('[data-cy="terms"]')
        .click()
        .should('have.checked', true)

        // checkbox enabled
        cy.get('button#submit')
        .should('not.be.disabled')
    })
    
    it('error messages are displayed properly', () => {
        cy.get('[for="email"] > input')
        .clear()

        cy.get('[data-cy="email-error-msg"]')
        .should('have.value', '')
    })
})