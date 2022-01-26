describe('User-Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=first_name]')
    const lastNameInput = () => cy.get('input[name=last_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = () => cy.get('input[name=ToS]')
    const buttonInput = () => cy.get('button[id="buttonx"]');

    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        // There can be multiple (and often will be) assertions per test
        // but...they must all relate to the "one thing" we're testing!
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // === strict equality
        expect({}).to.eql({}); // == not strict equality
    })

    it('the proper elements are showing', () => {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        buttonInput().should('exist');
    })

    it('Input Check', () => {
        firstNameInput()
            .should('have.value', '')
            .type('Lorenzo')
            .should('have.value', 'Lorenzo');
        lastNameInput()
            .should('have.value', '')
            .type('Gallo')
            .should('have.value', 'Gallo');
        emailInput()
            .should('have.value', '')
            .type('asddsafg@gmail.com')
            .should('have.value', 'asddsafg@gmail.com');
        passwordInput()
            .should('have.value', '')
            .type('asdeddfgawerrfsdaf')
            .should('have.value', 'asdeddfgawerrfsdaf');
        tosInput()
            .click();
    }) 
    
    it('Submit Check/ Validation', () => {
        firstNameInput()
            .type('Lorenzo')
            .should('have.value', 'Lorenzo');
        lastNameInput()
            .type('Gallo')
            .should('have.value', 'Gallo');
        emailInput()
            .type('asddsafg@gmail.com')
            .should('have.value', 'asddsafg@gmail.com');
        passwordInput()
            .type('asdeddfgawerrfsdaf')
            .should('have.value', 'asdeddfgawerrfsdaf');
        tosInput()
            .click()
        buttonInput()
            .should('not.be.disabled')
            .click();
    })
})