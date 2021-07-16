describe('Launch Website', function () {
    it('Goes to the website', function () {
        cy.visit('http://localhost:3000/')

    })
})

describe('Validation Check', function () {
    it('Checks to see if the schema validation works', function () {
        cy.get('[name=name]')
            .type('5char')
        

        cy.get('.nameError')
           .should('have.text', 'username requires at least 6 chars')
    })
})