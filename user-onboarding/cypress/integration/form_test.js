describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=firstName]');
    const lastNameInput = () => cy.get('input[name=lastName]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () =>  cy.get('input[name=password]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button[id=submitBtn]');

    it('sanity check to ensure tests are working', () =>{
        expect(true).to.equal(true);
        expect(1 + 2).not.to.equal(10);
    })



})