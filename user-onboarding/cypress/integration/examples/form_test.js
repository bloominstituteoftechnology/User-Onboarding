// const { text } = require("express")

describe ('Quotes App', () => {
    beforeEach( () => {
        cy.visit('http://localhost:3000')
    })

    const firstNameTextInput = () => cy.get('input[name="firstName"]')

    const lastNameTextInput = () => cy.get('input[name="lastName"]')

    const emailTextInput = () => cy.get('input[name="email"]')

    const passwordTextInput = () => cy.get('input[name="password"]')

    // const cancelBtn = () => cy.get('button[id="cancelBtn"]')

    it('sanity checks', () => {
        expect(5).to.equal(5)
        expect(1+2).to.equal(3)
        expect({}).to.eql({})
        expect({}).to.not.equal({})
    })

    it('getting first name and typing', () => {
        firstNameTextInput()
            .click()
            .type('Mark')
            .should('have.value', 'Mark')
    })

    it('getting last name and typing', () => {
        lastNameTextInput()
            .click()
            .type('DeLong')
            .should('have.value', 'DeLong')
    })

    it('getting email', () => {
        emailTextInput()
            .click()
            .type('test@test.com')
            .should('have.value', 'test@test.com')
    })

    it('getting password', () => {
        passwordTextInput()
            .click()
            .type('password123')
            .should('have.value', 'password123')
    })
  
   

})