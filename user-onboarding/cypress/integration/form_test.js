describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=firstName]');
    const lastNameInput = () => cy.get('input[name=lastName]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () =>  cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button[id=submitBtn]');
    const errorsDiv = () => cy.get('div[id=errors]')

    it('sanity check to ensure tests are working', () =>{
        expect(true).to.equal(true);
        expect(1 + 2).not.to.equal(10);
    })

    it('the elements are rendering', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsInput().should('exist');
        submitBtn().should('exist');
    })

    describe('Entering inputs successfully', () => {
        it('navigates to the site', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button beginning state is disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('able to type in text inputs', () => {
            firstNameInput()
                .should('have.value', '')
                .type('firstname')
                .should('have.value', 'firstname')

            lastNameInput()
                .should('have.value', '')
                .type('lastname')
                .should('have.value', 'lastname')
            
            emailInput()
                .should('have.value', '')
                .type('first.last@email.com')
                .should('have.value', 'first.last@email.com')

            passwordInput()
                .should('have.value', '')
                .type('12345678')
                .should('have.value', '12345678')
        })

        it('able to check terms checkbox', () => {
            termsInput()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })

        it('submit button state changes to enabled when required inputs are filled', () => {
            firstNameInput().type('firstname');
            lastNameInput().type('lastname');
            emailInput().type('first.last@email.com');
            passwordInput().type('12345678');
            termsInput().check();
            submitBtn().should('not.be.disabled');
        })

        it('validation appears if an input is missing', () => {
            firstNameInput().type('f{backspace}');
            errorsDiv().contains('First name required');
            
            lastNameInput().type('l{backspace}');
            errorsDiv().contains('Last name required');

            emailInput().type('e{backspace}');
            errorsDiv().contains('Email is required');

            passwordInput().type('1234');
            errorsDiv().contains('Password must be at least 8 characters');
            passwordInput().clear()
            // passwordInput().type('1{backspace}');
            // errorsDiv().contains('Password is required');

            termsInput().check().uncheck()
            errorsDiv().contains('Please agree to terms');





        })
    })



})

// Get the Name input and type a name in it.
// Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// Get the Email input and type an email address in it
// Get the password input and type a password in it
// Set up a test that will check to see if a user can check the terms of service box
// Check to see if a user can submit the form data
// Check for form validation if an input is left empty