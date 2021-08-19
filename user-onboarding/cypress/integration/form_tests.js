describe('Team Onboarding App', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000') 
    })
    // catching dom elements 

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const roleInput = () => cy.get('select[name=role]');
    const tosCheckbox = () => cy.get('input[name=termsOfService]')
    const submitButton = () => cy.get ('button[class="submit-button"]')

    it('Sanity Check to make sure tests are working', ()=> {
        expect(1+4).to.equal(5)
        expect(1+1).not.to.equal(3)
    })

    it('Check to see if proper elements are showing', ()=> {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        roleInput().should('exist');
        tosCheckbox().should('exist');
        submitButton().should('exist');
    })

    it('Can navigate to the site', ()=> {
        cy.url().should('include', 'localhost')
    })

    describe('Test if input fields can be filled out', ()=> {

       it('The Submit button is originally disabled', ()=> {
           submitButton().should('be.disabled')
       })

       it('Can type in the text input fields', ()=> {
            firstNameInput()
                .should('have.value', '')
                .type('Brent')
                .should('have.value', 'Brent')
            submitButton().should('be.disabled');
            lastNameInput()
                .should('have.value', '')
                .type('Besselievre')
                .should('have.value', 'Besselievre')
            submitButton().should('be.disabled')
            emailInput()
                .should('have.value','')
                .type('brent@gmail.com')
                .should('have.value', 'brent@gmail.com')
            submitButton().should('be.disabled')
            passwordInput()
                .should('have.value', '')
                .type('booger')
                .should('have.value', 'booger')
            submitButton().should('be.disabled')
       })

       it('Can click terms of service box', ()=> {
           tosCheckbox().should('be.not.checked')
           tosCheckbox().click()
           tosCheckbox().should('be.checked')
       })

    })

    describe('Can submit the data from the form', ()=> {
        it('Can submit the form', ()=> {
            firstNameInput().should('have.value', '')
            firstNameInput().type('Brent')
            lastNameInput().type('Besselievre')
            emailInput().type('brent@gmail.com')
            passwordInput().type('booger')
            tosCheckbox().click()
            submitButton().should('be.not.disabled')
            submitButton().click()
            cy.contains('Brent Besselievre')

        })
    })
})



