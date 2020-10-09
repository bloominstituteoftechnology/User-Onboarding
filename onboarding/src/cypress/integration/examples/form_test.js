describe('Header Text', function() {
    it('Checks if header text exists', function () {
        cy.visit("http://localhost:3001/");
        cy.get('input[name="name"]').type('Jacob Morris');
        cy.get('input[name="name"]').should('have.value', 'Jacob Morris')
        cy.get('input[name="email"]').type('jacob@jacob.com');
        cy.get('input[name="password"]').type('jjjjjj');
        cy.get('[type="checkbox"]').check()
        cy.get('form').submit()
        cy.get('button').should('be.disabled')
    })
})