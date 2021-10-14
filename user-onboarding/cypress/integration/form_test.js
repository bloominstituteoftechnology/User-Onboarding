describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const firstNameInput = () => cy.get('input[firstName=text]');
    const lastNameInput = () => cy.get('input[lastName=text]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsOfService = () => cy.get('input[name=termsOfService');
    const submitButton = () => cy.get('button[id=button]');

    it('sanity check to make sure tests work', () => {
        expect(2 + 2).to.equal(4);
        expect(10 + 10).to.equal(20);
        expect({}.not.to.equal({}));
        expect({}).to.equal({});
    })

    it('all elements should exist', () => {
        firstNameInput().should('exist')
        lastNameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsOfService().should('exist')
        submitButton().should('exist')
    })
})