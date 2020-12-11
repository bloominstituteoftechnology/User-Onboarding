describe('type and verify inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('grabs name element, types in the field', () => {
        cy.get('#name')
        .type('Mitch').should('have.value', 'Mitch')
    })
    it('grabs email and password, types into their fields', () => {
        cy.get('#email')
        .type('link@zelda.org').should('have.value', 'link@zelda.org')
        cy.get('#password')
        .type('CalamityGanon10000').should('have.value', 'CalamityGanon10000')
    })
})
describe('click terms and service, submit form data', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('clicks checkbox', () => {
        cy.get('#terms').check().should('be.checked')
    })
    it('fills out and submits data', () => {
        cy.get('#name')
        .type('Mitch')
        cy.get('#email')
        .type('link@zelda.org')
        cy.get('#password')
        .type('CalamityGanon10000')
        cy.get('#terms').check()
        cy.get('[data-cy=submit]').click()
        cy.get('pre').should('be.visible')
    })
})
describe('show errors if input is left empty', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('inputs and deletes to test form validation, ensures submit is enabled and disabled appropriatly', () => {
        cy.get('#name')
        .type('m')
        .clear()
        cy.get('.error').should('be.visible')
        cy.get('#name')
        .type('m')
        cy.get('#email')
        .type('m')
        cy.get('.error').should('be.visible')
        cy.pause()
        cy.get('#email')
        .clear()
        .type('link@zelda.org')
        cy.get('#password')
        .type('m')
        .clear()
        cy.get('.error').should('be.visible')
        cy.get('#password')
        .type('m')
        cy.get('#terms').check().uncheck()
        cy.get('.error').should('be.visible')
        cy.get('[data-cy=submit]').should('be.disabled')
        cy.get('#terms').check()
        cy.get('[data-cy=submit]').should('be.enabled')
        cy.get('#name')
        .clear()
        cy.get('[data-cy=submit]').should('be.disabled')
        cy.get('#name')
        .type('m')
        cy.get('[data-cy=submit]').should('be.enabled')
        cy.get('#email')
        .clear()
        cy.get('.error').should('be.visible')
        cy.get('[data-cy=submit]').should('be.disabled')
        cy.get('#email')
        .type('link@zelda.org')
        cy.get('[data-cy=submit]').should('be.enabled')
        cy.get('#password')
        .clear()
        cy.get('[data-cy=submit]').should('be.disabled')
        cy.get('#password')
        .type('m')
        cy.get('[data-cy=submit]').should('be.enabled')
    })
})