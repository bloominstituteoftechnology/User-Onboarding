describe('Initiate User Onboarding App Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const firstnameInput = () => cy.get('input[name=first_name]');
    const lastnameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsOfServiceBox = () => cy.get('input[type="checkbox"]');
    const submitBtn = () => cy.get('button');

    it('the proper elements are showing', () => {
        firstnameInput().should('exist');
        lastnameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsOfServiceBox().should('exist')
        submitBtn().should('exist');
    
    })

    describe('Fill Out User Text Boxes and CheckBoxes', () => {
    
        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can type in the inputs and check boxes', () => {
            firstnameInput()
                .should('have.value', '')
                .type('First Name')
                .should('have.value', 'First Name')
            lastnameInput()
                .should('have.value', '')
                .type('Last Name')
                .should('have.value', 'Last Name')
            emailInput()
                .should('have.value', '')
                .type('myemail@email.com')
                .should('have.value', 'myemail@email.com')
            passwordInput()
                .should('have.value', '')
                .type('MyAmazingPassword')
                .should('have.value', 'MyAmazingPassword')
            termsOfServiceBox()
                .check()
                .should('be.checked')
        })

        it('enables submit button when required inputs are filled in', () => {
            firstnameInput().type('First Name')
            lastnameInput().type('Last Name')
            emailInput().type('myemail@email.com')
            passwordInput().type('MyAmazingPassword')
            termsOfServiceBox().check().should('be.checked')
            submitBtn().should('not.be.disabled')
        })

        it('can submit form data when required inputs are filled in', () => {
            firstnameInput().type('First Name')
            lastnameInput().type('Last Name')
            emailInput().type('myemail@email.com')
            passwordInput().type('MyAmazingPassword')
            termsOfServiceBox().check().should('be.checked')
            submitBtn().should('not.be.disabled');
            submitBtn().click()
        })

        it('can show errors when missing required inputs', () => {
            firstnameInput().type('First Name')
            lastnameInput().type('Last Name')
            emailInput().type('myemail@email.com')
            passwordInput().type('MyAmazingPassword')
            termsOfServiceBox().check().should('be.checked')
            submitBtn().should('not.be.disabled')
            termsOfServiceBox().uncheck().should('not.be.checked')
            submitBtn().should('be.disabled');
            cy.get('.termsofservice-error')
            firstnameInput().clear()
            cy.get('.firstname-error')
            submitBtn().should('be.disabled');
            lastnameInput().clear()
            cy.get('.lastname-error')
            submitBtn().should('be.disabled');
            emailInput().clear()
            cy.get('.email-error')
            submitBtn().should('be.disabled');
            passwordInput().clear()
            cy.get('.password-error')
            submitBtn().should('be.disabled');
        })

    })
})

