
describe('Forms App', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('show text entered by user', () => {
        cy.get('#name').type('Rodolfo').should('have.value', 'Rodolfo')
        cy.get('#email').type('rodolfojaspe21@gmail.com').should('have.value', 'rodolfojaspe21@gmail.com')
        cy.get('#password').type('password').should('have.value', 'password')
    })
    it('checkbox can be checked', () => {
        cy.get('#terms').click().should('be.checked')
        
    })
    it('submit button works', () => {
        cy.get('button').click();

    })


})