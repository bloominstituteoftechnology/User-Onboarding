describe('User App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    const nameInput = () => cy.get('input[name=text]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsOfService = () => cy.get('input[name=terms of service]')







})