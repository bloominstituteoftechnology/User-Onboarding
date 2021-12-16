describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosInput = () => cy.get('input[name=tos]');
    const submitButton = () => cy.get('button[id=submitBtn]');

    it('the proper elements are showing up', () => {

        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        submitButton().should('exist');
    });

    describe('filling out the inputs and cancelling', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })
    });

    it('submit button starts out disbaled', () => {
        submitButton().should('be.disabled');
    });

    it('can type in the values', () => {
        nameInput().should('have.value', '').type('Tuan').should('have.value', 'Tuan');
        emailInput().should('have.value', '').type('emails@yahoo.com').should('have.value', 'emails@yahoo.com');
        passwordInput().should('have.value', '').type('tnguyen').should('have.value', 'tnguyen');
        tosInput().check();
    })
    
    it('submit button is enabled if all inputs are filled out', () => {
        nameInput().type('Tuan');
        emailInput().type('email@yoo.com');
        passwordInput().type('tnguyen');
    })
})
