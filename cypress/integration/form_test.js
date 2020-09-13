describe('My First test', function () {
    it ('not much', () => {
        cy.visit('/Form')
        
        cy.get('form > :nth-child(1) > label > input')
        .type('Daniel')
        .should('have.value','Daniel')

        cy.get(':nth-child(2) > label > input')
        .type('karmaeiic.neuushi@gmail.com')
        .should('have.value','karmaeiic.neuushi@gmail.com')

        cy.get(':nth-child(3) > label > input')
        .type('password')
        .should('have.value','password')

        cy.get('[type="checkbox"]')  .check({ force: true }).should('be.checked')  

        cy.get('form').submit()
    })