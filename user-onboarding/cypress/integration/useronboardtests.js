describe('User Form Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    // Helpers to centralize CSS selectors / DOM grabbing

    const firstNameInput = () => cy.get('input[name=first_name]')
    const lastNameInput = () => cy.get('input[name=last_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsOfService = () => cy.get('input[name=tos]')
    const submitBtn = () => cy.get('button[id=submit]')

    it('Sanity Check', () => {
        expect(1 + 2).to.equal(3);
        expect(1 + 2).not.to.equal(10);
    })

    it('Proper elements should be rendered on the DOM', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsOfService().should('exist');
        submitBtn().should('exist');
    })

    describe('Testing input fields', () => {

        it('Type name & check if the text inputted contains the name you provided', () => {
            firstNameInput().type('Peter')
            firstNameInput().should('have.value', 'Peter')
            lastNameInput().type('Conley')
            lastNameInput().should('have.value', 'Conley')
        })

        it('Get the Email input and type an email address in it', () => {
            emailInput().type('peterpan@gmail.com')
            emailInput().should('have.value', 'peterpan@gmail.com')
        })

        it('Get the password input and type a password in it', () => {
            passwordInput().type('123abc')
            passwordInput().should('have.value', '123abc')
        })

    })

    describe('Testing checkbox, submission, and validation', () => {
        it('Set up a test that will check to see if a user can check the terms of service box', () => {

        })
        it('Check to see if a user can submit the form data', () => {

        })
        it('Check for form validation if an input is left empty', () => {

        })
    })


});