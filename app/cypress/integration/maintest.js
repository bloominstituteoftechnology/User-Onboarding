// Write test below this line

describe('Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    // Declare testing units below
    const usernameInput = () => cy.get('input[name="username"]').should('exist')
    const emailInput = () => cy.get('input[name="email"]').should('exist')
    const passwordInput = () => cy.get('input[name="password"]').should('exist')
    const checkboxCheck = () => cy.get('input[name="agree"]').should('exist')

    // Start Exist Testing
    it('Inputs Exist', () => {
        // Start Assertion(s)
        usernameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        checkboxCheck().should('exist')
    })

    // Start Typing Testing
    it('Type in Username', () => {
        usernameInput().type('BWSievert')
        usernameInput().should('have.value', 'BWSievert')
    })

    it('Type in Email', () => {
        emailInput().type('BWSievert@randomemail.com')
        emailInput().should('have.value', 'BWSievert@randomemail.com')
    })

    it('Type in Password', () => {
        passwordInput().type('randompassword123')
        passwordInput().should('have.value', 'randompassword123')
    })
    it('Check checkbox', () => {
        checkboxCheck().check()
    })
});