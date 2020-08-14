describe('Testing for inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    it('add text, email, and password to inputs, check tos, and submit form fro two users', () => {
//first user
        cy.get('[data-cy=name]').type('Miles Edgeworth').should('have.value', 'Miles Edgeworth')
        cy.get('[data-cy=email]').type('medgeworth@aceattorney.com').should('have.value', 'medgeworth@aceattorney.com')
        cy.get('[data-cy=password]').type('nodrama1234').should('have.value', 'nodrama1234')
        cy.get('[data-cy=tos]').check().should('have.checked')
        cy.get('[data-cy=form]').submit()

    })

    it('testing empty inputs', () => {
                cy.get('[data-cy=name]').click().should('have.focus')
                cy.get('[data-cy=email]').click().should('have.focus')
                cy.get('[data-cy=password]').click().should('have.focus')
                cy.get('[data-cy=tos]').check().should('have.checked')
                cy.get('[data-cy=btn]').click()
        
            })
})