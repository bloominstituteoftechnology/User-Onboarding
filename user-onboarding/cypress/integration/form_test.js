describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const firstNameInput = () => cy.get('input[name=firstName]');
    const lastNameInput = () => cy.get('input[name=lastName]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsOfService = () => cy.get('[type=checkBox');
    const submitButton = () => cy.get("button[id=submitButton]");

    it('sanity check to make sure tests work', () => {
        expect(2 + 2).to.equal(4);
        expect(10 + 10).to.equal(20);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('the proper elements are showing', () => {
        firstNameInput().should('exist')
        lastNameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsOfService().should('exist')
        submitButton().should('exist')
    })

    describe('Filling out the inputs and cancelling', () => {
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })

        it('submit button starts out disabled', () => {
            submitButton().should('be.disabled');
        })

        it('can type in the inputs', () => {
            firstNameInput()
                .should('have.value', '')
                .type('Ryan')
                .should('have.value', 'Ryan');
            lastNameInput()
                .should('have.value', '')
                .type('Howard')
                .should('have.value', 'Howard');
            emailInput()
                .should('have.value', '')
                .type('ryan12howard@gmail.com');
            passwordInput()
                .should('have.value', '')
                .type('blahblahblah');
        })

        it('Empty fields', () => {
            firstNameInput().type('Joe').clear();
            lastNameInput().type('Shmoe').clear();
            emailInput().type('joeshmoe@gmail.com').clear();
            passwordInput().type('joeshmoe').clear();
            termsOfService().check().uncheck();
        }) 
    })
})