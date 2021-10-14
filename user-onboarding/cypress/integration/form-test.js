//tests begin here

describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })
    //declaring variables for my stuff with their input names/id
    const fnameInput = () => cy.get('input[name=fname');
    const lnameInput = () => cy.get('input[name=lname]');
    const submitButton = () => cy.get("button[id='button']");
    const passwordInput = () => cy.get('input[name=password]');
    const emailInput = () => cy.get('input[name=email]')
    const termBox = () => cy.get('[type="checkbox"]');

    //sanity check
    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('the proper elements are showing', () => {
        //these inputs should exist
        fnameInput().should('exist');
        lnameInput().should('exist');
        passwordInput().should('exist');
        submitButton().should('exist');
        termBox().should('exist');
        emailInput().should('exist');
    })

    describe('filling out the inputs and submitting', () => {
        
        //should navigate to the url
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })

        //submit button should be disabled
        it('submit button starts out disabled', () => {
            submitButton().should('be.disabled');
        })

        //ability to type in the inputs
        it('stuff can be typed in the inputs', () => {
            fnameInput()
                .should('have.value', '')
                .type('Redd')
                .should('have.value', 'Redd');
            lnameInput()
                .should('have.value', '')
                .type('Mama')
                .should('have.value', 'Mama');
            passwordInput()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password');
            emailInput()
                .should('have.value', '')
                .type('moua0061@yahoo.com')
                .should('have.value', 'moua0061@yahoo.com')
            termBox()
                .check({force:true})
                .should('be.checked');
        })

        //submit button should not be disabled after filling out fields & terms of service box is checked
        it('submit button should work after all fields are entered and checked', () => {
            fnameInput().type('Redd');
            lnameInput().type('Mama');
            emailInput().type('moua0061@yahoo.com');
            passwordInput().type('password');
            termBox().should('be.checked');
            submitButton().should('not.be.disabled');
        })
    })

})

