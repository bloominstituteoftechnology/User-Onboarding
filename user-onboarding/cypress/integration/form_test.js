describe('Testing Form Inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('Lets test some inputs...', () => {
        cy.get('[data-cy=name]')
        .type('Cameron Mirza')
        .should('have.value', 'Cameron Mirza');

        cy.get('[data-cy=email')
        .type('mail@cmirza.com')
        .should('have.value', 'mail@cmirza.com')

        cy.get('[data-cy=password]')
        .type('supersecretpassword')
        .should('have.value', 'supersecretpassword')

        cy.get('[data-cy=checkbox]')
        .check()
        .should('be.checked')

        cy.get('[data-cy=submit]')
        .click()
    })
})

describe('Testing Form Validation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('Lets test a validation error on missing checkbox...', () => {
        cy.get('[data-cy=name]').type('Cameron Mirza')
        cy.get('[data-cy=email]').type('mail@cmirza.com')
        cy.get('[data-cy=password]').type('supersecretpassword')
        
        cy.get('[data-cy=checkbox]').check()
        cy.get('[data-cy=checkbox]').uncheck()
        cy.get('[data-cy=warning]').should('have.text', 'Must accept terms!')
    })

    it('A missing password...', () => {
        cy.get('[data-cy=name]').type('Cameron Mirza')
        cy.get('[data-cy=email]').type('mail@cmirza.com')
        cy.get('[data-cy=password]').type('s{backspace}')

        cy.get('[data-cy=warning]').should('have.text', 'Password is required')
    })

    it('Password too short...', () => {
        cy.get('[data-cy=name]').type('Cameron Mirza')
        cy.get('[data-cy=email]').type('mail@cmirza.com')
        cy.get('[data-cy=password]').type('sup')

        cy.get('[data-cy=warning]').should('have.text', 'Password had 6 character minimum')
    })

    it('Email missing...', () => {
        cy.get('[data-cy=name]').type('Cameron Mirza')
        cy.get('[data-cy=email]').type('m{backspace}')
        cy.get('[data-cy=password]').type('supersecretpassword')

        cy.get('[data-cy=warning]').should('have.text', 'Email is required')
    })

    it('A man with no name...', () => {
        cy.get('[data-cy=name]').type('C{backspace}')
        cy.get('[data-cy=email]').type('mail@cmirza.com')
        cy.get('[data-cy=password]').type('supersecretpassword')

        cy.get('[data-cy=warning]').should('have.text', 'Name is required')
    })
});
