describe('submit button works', () => {
    it('navigation to website', () => {
        cy.visit('http://localhost:3000/')
        cy.url().should('include', 'localhost')
    })
    it('form loads properly', () => {
        cy.get('form')
        cy.get('[type="text"]')
        cy.get('[type="email"]')
        cy.get('[type="password"]')
        cy.get('a')
        cy.get('[type="checkbox"]')
        cy.get('button')
    })
    it('form inputs are empty', () => {
        cy.get('[type="text"]').should('be.empty')
        cy.get('[type="email"]').should('be.empty')
        cy.get('[type="password"]').should('be.empty')
        cy.get('[type="checkbox"]').should('not.be.checked')
        cy.get('button').should('be.disabled')
    })
    it('entered name data is valid', () => {
        cy.get('[type="text"]').type('Jonah').should('have.value', 'Jonah')
    })
    it('entered email data is valid', () => {
        cy.get('[type="email"]').type('example@email.com').should('have.value', 'example@email.com')
    })
    it('entered password data is valid', () => {
        cy.get('[type="password"]').type('Runner124##').should('have.value', 'Runner124##')
    })
    it('entered checkbox data is valid', () => {
        cy.get('[type="checkbox"]').type('[type="checkbox"]')
        cy.get('[type="checkbox"]').should('be.checked')
    })
    it('entered submit button data is valid', () => {
        cy.get('button').should('not.be.disabled')
    })
});