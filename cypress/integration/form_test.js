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
    const userCard = () => cy.get('div[class=user container]')
    const userCardName = () => cy.get('p')
    const userCardEmail = () => cy.get('p')

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
            submitBtn().should('not.be.disabled');
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

        it('can show errors without required inputs', () => {
            // firstnameInput().type('First Name')
            lastnameInput().type('Last Name')
            emailInput().type('myemail@email.com')
            passwordInput().type('MyAmazingPassword')
            termsOfServiceBox().check().should('be.checked')
            submitBtn().should('be.disabled');
            submitBtn().click()
        })

    })
})

