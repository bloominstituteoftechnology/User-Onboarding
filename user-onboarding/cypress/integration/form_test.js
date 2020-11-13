describe('Testing Form Inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('Lets test some inputs...', function() {
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