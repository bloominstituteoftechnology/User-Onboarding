describe("Quotes App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    })

    const usernameInput = () => cy.get('input[name="username"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const checkbox = () => cy.get('[type="checkbox"')
    const submitBtn = () => cy.get('[id="submit-button"]')

    it('sanity checks', () => {
        expect(5).to.equal(5)
        expect(1+2).to.equal(3)
        expect({}).to.eql({})
        expect({}).to.not.equal({})
    })

    it('the proper elements exists', () => {
        usernameInput().should('exist')
    })

    describe('Filling out inputs and checkboxes', () => {
        it('can type inside the inputs', () => {
            usernameInput()
            .should('have.value', '')
            .type('Can you see the name')
            .should('have.value', 'Can you see the name')

            emailInput()
            .should('have.value', '')
            .type('test@test.com')
            .should('have.value', 'test@test.com')

            passwordInput()
            .should('have.value', '')
            .type('12345')
            .should('have.value', '12345')

        })
    })

    describe('Clicking on checkbox and submit button', () => {
        it('Can click on checkbox', ()=> {
            checkbox()
            .should('be.not.checked')
            .click()
            .should('be.checked')
            .click()
        })
        it('Can click on submit once filled out, and information submits correctly', () => {
            cy.contains(/test@test.com/).should('not.exist')
            usernameInput().type('test')
            passwordInput().type('test2')
            emailInput().type('test@test.com')
            submitBtn().click()
            cy.contains(/test@test.com/).should('exist')
        })    
    })

    describe('Validation', ()=> {
        it('Can validate form entries if an input is left empty', ()=> {
            submitBtn().click()
            cy.contains(/''/).should('not.exist') 
        })
    })
})

/**
 *  
 Set up a test that will check to see if a user can check the terms of service box
 Check to see if a user can submit the form data
 Check for form validation if an input is left empty
 */
