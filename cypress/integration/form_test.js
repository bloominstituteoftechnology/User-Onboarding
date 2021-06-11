describe('First test', function() {
    it('Testing true is true', function() {
        expect(true).to.equal(true)
    })
})





describe('User-Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://192.168.1.252:3002')
    })
    // Helper Functions 
const usernameInput = () => cy.get('input[name="username"]')
const passwordInput = () => cy.get('input[name="password"]')
const emailInput = () => cy.get('input[name="email"]')
const submitButton = () => cy.get('button[id="submitBtn"]')
const termsOfServiceChecked = () => cy.get('[type="checkbox"]').check()


    it('sanity checks', () => {
        expect(5).to.equal(5)
        expect(33 + 33).to.equal(66)
    })
    it('can type inside the username input', () => {
        usernameInput()
        .should('have.value', "")
        .type("Bentley")
        .should('have.value', "Bentley")
    })
    it('can type inside the password input', () => {
        passwordInput()
        .should('have.value', "")
        .type("Hernandez")
        .should('have.value', "Hernandez")
    })
    it('can type inside email input', () => {
        emailInput()
        .should('have.value', "")
        .type("dog@dog.com")
        .should('have.value', "dog@dog.com")
    })
    it('can check the terms of service checkbox', () => {
        termsOfServiceChecked()

    })

    it('submit button enables when form is filled out', () => {
        submitButton().should('not.be.enabled')
        usernameInput().type('testing 1 2 3')
        passwordInput().type('testing')
        emailInput().type('test@test.com')
        termsOfServiceChecked().check()
        submitButton().should('be.enabled') 
    })

describe('adding a new user', () => {
    it('can submit a new user', () => {
        cy.contains("test username").should('not.exist')
        usernameInput().type('test username')
        passwordInput().type('test password')
        emailInput().type('test@test.com')
        termsOfServiceChecked().check
        submitButton().click()
    })
})



})