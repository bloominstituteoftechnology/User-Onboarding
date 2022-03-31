describe('User Onboarding', () => {

        //tell cypress where is the host location to test
        beforeEach(() => {
            cy.visit('http://localhost:3000/')
        })

        //helpers 
        const nameInput = () => cy.get('input[name=first_name]');
        const emailInput = () => cy.get('input[name=email]');
        const pwInput = () => cy.get('input[name=password]');
        const termsInput = () => cy.get('[type="checkbox"]');
        const submit = () => cy.get('button[id="submitBtn"]');
        const testInput = () => cy.get('input[name=test]');

        //initial test to make sure everything is working correctly
        it('Initial test! Just checking!', () => {
            expect(1+2).to.equal(3);
            expect(2+2).not.to.equal(5);
        })

        //test Name 
        it('Elements are showing on page', () => {
            nameInput().should('exist');
            emailInput().should('exist');
            pwInput().should('exist');
            termsInput().should('exist');
            submit().should('exist');
            testInput().should('not.exist');
        })

    describe('Inputting Text and Checkbox', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })
        it('submit button starts out disabled', () => {
            submit().should('be.disabled');
        })
        it('can type in input', () => {
            nameInput()
            .should('have.value', '')
            .type('Kim')
            .should('have.value', 'Kevin')

            emailInput()
            .should('have.value', '')
            .type('kevin@email.com')
            .should('have.value', 'kevin@email.com')

            pwInput()
            .should('have.value', '')
            .type('123abc')
            .should('have.value', '123abc')
        })
        it('terms can be checked and unchecked', () => {
            termsInput()
            .check()
            .uncheck()
        })
    })
    describe('Validation of when an input field is empty', () => {
        it('submit button disabled with missing inputs', () => {
            emailInput().type('kevin@email.com');
            pwInput().type('abc123');
            termsInput().check();
            submit().should('be.disabled');
        })
        it('submit button enabled when all inputs filled out', () => {
            nameInput().type('Kevin Lai');
            emailInput().type('kevin@email.com');
            pwInput().type('abc123');
            termsInput().check();
            submit().should('not.be.disabled');
        })   
    })
})