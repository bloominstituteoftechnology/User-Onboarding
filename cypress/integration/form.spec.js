describe ('User Onboarding App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //HELPERS
    const submitBtn = () => cy.get('button')
    const nameInput = () => cy.get('.inputs > :nth-child(1) > input')
    const emailInput = () => cy.get('.inputs > :nth-child(2) > input')
    const pwInput = () => cy.get('.inputs > :nth-child(3) > input')
    const tosCheckBox = () => cy.get('.checkbox > label > input')



    it ('Are we Working', () => {
        expect(true).to.equal(true)
    })
}) // Close top level describe