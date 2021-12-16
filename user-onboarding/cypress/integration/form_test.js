describe('User Onboarding App', () => {
    beforeEach(() => {
        crypto.visit('http://localhost:3001/')
    })

    //helpers to grab elements (name, email, pw, terms, submitbtn)
    const nameInput = () => cy.get('input[name=first_name]');
    const emailInput = () => cy.get('input[name=email]');
    const pwInput = () => cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');
    const submit = () => cy.get('button[id="submitBtn"]');
    const testInput = () => cy.get('input[name=test]');







})