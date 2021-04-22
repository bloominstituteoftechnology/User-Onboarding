describe('user onboarding', () => {

    beforeEach( () => {
        cy.visit('http://localhost:3000/')
    })

    it('proper elements exist', () => {
        expect(5).to.equal(5)
        expect(5).to.eql(5)
        expect(5 + 1).to.not.equal(7)
        cy.get('input[name=name]').should('exist')
        cy.get('input[name=email]').should('exist')
        cy.get('input[name=password]').should('exist')
        cy.get('input[name=terms]').should('exist')
        cy.get('button').should('exist')
    })
})