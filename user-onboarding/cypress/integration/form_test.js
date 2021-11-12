describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    const nameInput = () => cy.get('input[name=username');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkedInput = () => cy.get('input[name=termsOfService]');
    const submitButton = () => cy.get('input[type=submit]');

    it('takes the proper input', () => {
        nameInput().type('Levi Smith').should('have.value', 'Levi Smith');
        emailInput().type('asd@gmail.com').should('have.value', 'asd@gmail.com');
        passwordInput().type('cassity');
        checkedInput().click();
        submitButton().should('not.be.disabled');
    })

    it('has everything filled out', ()=> {
        nameInput().should('have.value', '');
        emailInput().should('have.value', '');
        passwordInput().should('have.value', '');
        checkedInput().should('have.value', 'on')
        
    })
})