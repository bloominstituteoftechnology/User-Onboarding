describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    //grabbing elements
    const userNameInput = () => cy.get('input[name=username');
    const passwordInput = () => cy.get('input[name=password');
    const emailInput = () => cy.get('input[name=email');
    const testCheckBox = () => cy.get('input[name=tos]');
    const submitButton = () => cy.get('button');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    //checking for elements
    it('Checking the elements', () => {
        userNameInput().should('exist');
        passwordInput().should('exist');
        emailInput().should('exist');
        testCheckBox().should('exist');
        submitButton().should('exist');
        //cy.contains(/submit/i).should('exist');

    })

    describe('Taking the form for a spin', () => {
        it('checking localhost', () => {
            cy.url().should('include', 'localhost');
        })
        it('submit button is disabled', () => {
            submitButton().should('be.disabled');
        })

        it('checking the inputs for username, email and pass', () => {
            userNameInput()
                .should('have.value', '')
                .type('John Doe')
                .should('have.value', 'John Doe')

            emailInput()
                .should('have.value', '')
                .type('some@junk.com')
                .should('have.value', 'some@junk.com')

            passwordInput()
                .should('have.value', '')
                .type('12345')
                .should('have.value', '12345')         
        })

        it('enabling submit button', () => {
            userNameInput().type('John');
            passwordInput().type('12345');
            emailInput().type('some@junk.com')
            testCheckBox().check();
            submitButton().should('not.be.disabled');
          })

        it('checking the TOS checkbox', () => {
            testCheckBox().should('not.be.checked');
            testCheckBox().check();
            testCheckBox().should('be.checked')
        })

        describe('adding a new user', () => {
           it('can add a new user', () => {
            userNameInput().type('John');
            passwordInput().type('12345');
            emailInput().type('some@junk.com')
            testCheckBox().check();
            submitButton().click();

           })
           
        })

    })

})