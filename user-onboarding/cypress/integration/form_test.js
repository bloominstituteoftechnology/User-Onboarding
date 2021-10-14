describe('Form app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkboxBtn = () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get('button[id=submit]')

    it('sanity check for tests', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    })

    it('test', () => {
        nameInput().should('exist');
        nameInput().type('Kenji').should('have.value', 'Kenji');
        emailInput().type('kenjigrr@gmail.com').should('have.value', 'kenjigrr@gmail.com');
        passwordInput().type('password').should('have.value', 'password');
        checkboxBtn().check();

        submitBtn().click();
        cy.contains('Kenji').should('exist');
        cy.contains('kenjigrr@gmail.com').should('exist');
        cy.contains('password').should('exist');

    })


})