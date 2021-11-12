describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const phoneInput = () => cy.get('input[name=phoneNumber]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosInput = () => cy.get('input[name=tos]');
    const submitButton = () => cy.get('button[id="submit"]');

    it('Sanity check', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5); 
        expect({}).to.eql({}) 
    })

    it('The proper elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        phoneInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        submitButton().should('exist');

        
        cy.contains(/submit/i).should('exist');
    })

    describe('Inputs are functional', () => {
        it('Name input text works', () => {
            nameInput().type('Ricky Bobby');
            nameInput().should('have.value', 'Ricky Bobby');
        })

        it('Email input text works', () => {
            emailInput().type('shakeandbake@babeh.com');
            emailInput().should('have.value', 'shakeandbake@babeh.com');
        })

        it('Phone number works', () => {
            phoneInput().type('5554589850');
            phoneInput().should('have.value','5554589850');
        })

        it('Password work', () => {
            passwordInput().type('JustYourMother');
            passwordInput().should('have.value', 'JustYourMother');
        })

        it('TOS works and is checkable', () => {
            tosInput().check();
        })

    })

    describe('If information is missing, submit button should not be validated', () => {
        it('Missing name - Submit button disabled', () => {
            emailInput().type('shakeandbake@babeh.com');
            phoneInput().type('5554589850');
            passwordInput().type('JustYourMother');
            tosInput().check();
            submitButton().should('be.disabled');
        })
        it('Missing email - Submit button disabled', () => {
            nameInput().type('Ricky Bobby');
            phoneInput().type('5554589850');
            passwordInput().type('JustYourMother');
            tosInput().check();
            submitButton().should('be.disabled');
        })
        it('Missing phone number - Submit button disabled', () => {
            nameInput().type('Ricky Bobby');
            emailInput().type('shakeandbake@babeh.com');
            passwordInput().type('JustYourMother');
            tosInput().check();
            submitButton().should('be.disabled');
        })
        it('Missing password - Submit button disabled', () => {
            nameInput().type('Ricky Bobby');
            emailInput().type('shakeandbake@babeh.com');
            phoneInput().type('5554589850');
            tosInput().check();
            submitButton().should('be.disabled');
        })
        it('TOS not checked - Submit button disabled', () => {
            nameInput().type('Ricky Bobby');
            emailInput().type('shakeandbake@babeh.com');
            phoneInput().type('5554589850');
            passwordInput().type('JustYourMother');
            submitButton().should('be.disabled');
        })
    })

    describe('User can submit if they fill all info', () => {
        it('User can submit their information', () => {
            nameInput().type('Ricky Bobby');
            emailInput().type('shakeandbake@babeh.com');
            phoneInput().type('5554589850');
            passwordInput().type('JustYourMother');
            tosInput().check();
            submitButton().click();
        })
    })

})

