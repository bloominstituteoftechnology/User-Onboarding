/* eslint-disable no-undef */
describe('mvp tests',() => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const checkboxInput = () => cy.get('input[name=terms]')
    const buttonSubmit = () => cy.get('#submitButton')

    it('check if it works', () =>{
        expect(1+1).to.equal(2)
    })

    it('check if these elements exist', () =>{
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        checkboxInput().should('exist')
        buttonSubmit().should('exist')
    })

    describe('Filling out the inputs', () => {

        it('submit button should be disabled', ()=>{
            buttonSubmit().should('be.disabled')
        })

        it('can type in inputs', () => {
            nameInput()
                .should('have.value', '')
                .type('Michael')
                .should('have.value', 'Michael')

            emailInput()
                .should('have.value', '')
                .type('michael@gmail.com')
                .should('have.value', 'michael@gmail.com')

            passwordInput()
                .should('have.value', '')
                .type('ThisisPassword1321.#@!$')
                .should('have.value', 'ThisisPassword1321.#@!$')  

            checkboxInput()
                .should('have.not.checked')
                .click()
                .should('have.checked')

            buttonSubmit()
                .should('be.enabled')
                .click()
                .should('be.disabled')
        })

    })


})