describe('Onboarding app tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


it('test for sanity', () => {

    cy
    .get('[data-cy=name]')
    .type('Skeletor')
    .should('have.value', 'Skeletor')

    cy
    .get('[data-cy=email]')
    .type('test@email.com')
    .should('have.value', 'test@email.com')

    cy
    .get('[data-cy=password]')
    .type('battlecat')
    .should('have.value', 'battlecat')

    cy
    .get('[data-cy=terms]')
    .check()
    .should('be.checked')

    cy
    .get('[data-cy=submit]')
    .click()

  })
})