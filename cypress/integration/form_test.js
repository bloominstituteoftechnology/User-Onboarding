//write tests here//

const { iteratee } = require("lodash")


describe('Form App', () => {

    beforeEach( () => {
        cy.visit('/')
    })

    const nameInput = () => cy.get(':nth-child(1) > input')
    const emailInput = () => cy.get(':nth-child(2) > input')
    const passwordInput = () => cy.get(':nth-child(3) > input')
    const tosBox = () => cy.get(':nth-child(4) > input')
    const submitButton = () => cy.get('button')
    const personName = 'Cypress'
    const personEmail = 'cypresstest@gmail.com'
    const personPassword = 'password123'


    it('allows user to add new name in name input', () => {
        //Get the Name input and type a name in it
        
        nameInput().type(personName)
          

    })

    
    it('allows user to add new email in email input', () => {
        //Get the email input and type a name in it
        
        emailInput().type(personEmail)     

    })


    it('allows user to add new password in password input', () => {
        //Get the password input and type a name in it
        
        passwordInput().type(personPassword)

    })


    it('allows user to check terms of service box', () => {
        //Get the tos input and allows user to check box
        tosBox().click()
        

    })


    it('allows user to click on submit button, and check if name matches nameInput', () => {
        nameInput().type(personName)
        emailInput().type(personEmail) 
        passwordInput().type(personPassword)
        tosBox().click()
        submitButton().click()
        cy.contains('Cypress').should('exist')
    })



})