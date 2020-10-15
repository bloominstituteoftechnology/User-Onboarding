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
    const reload = () => cy.visit('http://localhost:3000')

    const populateInputs = () => {
        nameInput().type('name', {delay: 200})
        emailInput().type('email@mail.com')
        pwInput().type('Password123')
        tosCheckBox().check()
    }

    const clearInputs = () => {
        nameInput().clear()
        emailInput().clear()
        pwInput().clear()
        tosCheckBox().uncheck()
    }



    describe('Empty Component Test', () => {
        it('submit button is disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('Text Inputs exist and are empty', () => {
            nameInput().should('exist')
            nameInput().should('have.value', '')
            emailInput().should('exist')
            emailInput().should('have.value', '')
            pwInput().should('exist')
            pwInput().should('have.value', '')
        })

        it('Checkbox should be unchecked', () => {
            tosCheckBox().should('not.be.checked')
        })
    })

    describe('Test Form Entry', () => {
        it('Text inputs active and hold keystrokes', () => {
            populateInputs()
          
            nameInput().should('have.value', 'name')
            emailInput().should('have.value', 'email@mail.com')
            pwInput().should('have.value', 'Password123')
            
            clearInputs()
        })

        it('Submit Button Clears input', () => {
            populateInputs()

            submitBtn().click()

            nameInput().should('have.value', '')
            emailInput().should('have.value', '')
            pwInput().should('have.value', '')
            tosCheckBox().should('not.be.checked')

            cy.visit('http://localhost:3000')
        })
    })

    describe('User Renders', () => {
        it('single user on submit', () => {
            populateInputs()
            submitBtn().click()
            cy.get('.user').should('exist')
            reload()
        })

        it('Multiple User Renders', () => { // is happening with second populate inputs??
            populateInputs()
            submitBtn().click()
            populateInputs()
            submitBtn().click()
            cy.get('.user-wrapper > :nth-child(2)').should('exist')
        })
        // cy.get('.user-wrapper > :nth-child(2)')
    })

}) // Close top level describe


/*
Text box functionality 
Check box funcionality 
Error message reportin 
*/
