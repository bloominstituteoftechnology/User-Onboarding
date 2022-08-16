

describe('User Onboarding', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000')    
    })

    const firstnameInput = () => cy.get('input[name=first_name]');
    const lastnameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsofserviceBox = () => cy.get('[type=checkbox]');
    const submitBtn = () => cy.get('[id="submitBtn"]')
    const emailerr = () => cy.get('[id="emailerr"]')

    it('the desired elements are showing', () => {
        firstnameInput().should('exist');
        lastnameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsofserviceBox().should('exist');
    })

    describe('Fill out inputs', () => {
        it('can type in the inputs', () => {
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
                .type('email')
                .should('have.value', 'email')

            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
        })

        it('the submit button enables when all inputs are filled out and subits', () => {
            firstnameInput().type('I LOVE CSS');
            lastnameInput().type('Said no one ever');
            emailInput().type('never@nere.com');
            passwordInput().type('eve234r');
            termsofserviceBox().check();
            submitBtn().should('not.be.disabled')
            submitBtn().click();
            })

        it ('can check the checkbox', () => {
            termsofserviceBox().check()
            .should('be.checked')
        })    


        it('Check for form validation', () => {
            emailInput()
                .type('invalid email')
                emailerr().should('have.value', 'Enter a valid email address')            
        })

    })
})


