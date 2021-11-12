describe('User Onboarding', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('input[type=submit]');
    const termsBox = () => cy.get('input[type=checkbox]');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
    })

    it('Elements are showing properly', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitBtn().should('exist');
        termsBox().should('exist');
    })

    it('Can type in the inputs', () => {
        nameInput()
            .click()
            .type('Qua Wilburn', {force:true})
            .should('have.value', 'Qua Wilburn');
        emailInput()
            .type('blahblah@gleemail.com')
            .should('have.value', 'blahblah@gleemail.com');
        passwordInput()
            .type('myPassword')
            .should('have.value','myPassword');
    })

    it('Can check terms of condition box', () => {
        termsBox()
        .check()
        .should('be.checked')
    })

    it('Can submit user information', () => {
        nameInput().type('Qua Wilburn');
        emailInput().type('blahblah@gleemail.com');
        passwordInput().type('myPassword');
        termsBox().check();
        submitBtn().click();
    })
})