describe('quotes app', () =>{

    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const termsCheck = () => cy.get('input[type=checkbox]')
    const submitBtn = () => cy.get('button[id=submitBtn]');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
    })

    it('proper elements showing', () =>{
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist');
        termsCheck().should('exist');
        submitBtn().should('not.exist');
        cy.contains('Name').should('exist');
    })

    


})