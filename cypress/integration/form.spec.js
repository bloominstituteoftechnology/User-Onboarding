describe ('User Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it ('Are we Working', () => {
        expect(true).to.equal(true)
    })
}) // Close top level describe