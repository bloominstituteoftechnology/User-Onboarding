describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
      const fNameInput = () => cy.get('input[name=first_name]');
      const lNameInput = () => cy.get('input[name=last_name]');
      const emailInput = () => cy.get('input[name=email]');
      const passInput = () => cy.get('input[name=password]');
      const submitBtn = () => cy.get('button[id="submitBtn]');
      const termsOfService = () => cy.get('type="checkbox"]');
      const errors = () => cy.get('.errors');

    it('performing sanity check...', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.equal({});
    })

    describe('filling out the inputs', () => {
        it('the proper elements are showing', () => {
        fNameInput().should('exist');
        lNameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist');
        submitBtn().should('exist');
        termsOfService().should('exist');
    })
      
    it('Checking name inputs', () => {
        fNameInput().type('My first name');
        lNameInput().type('My last name');
        fNameInput().should('have.value', 'My first name');
        lNameInput().should('have.value', 'My last name');
        passInput().typ('My password');
    })

    it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled');
    })

    it('the submit button enables when all inputs are filled out', () => {
        fNameInput().type('Reed');
        lNameInput().type('Lauckern');
        emailInput().type('r.lauckern@gmail.com');
        passInput().type('blahblah');
        termsOfService().check();
        submitBtn().should('not.be.disabled');
    })

    it('there is form validation if an input is empty', () => {
        fNameInput().should('have.vaue', '');
        lNameInput().should('have.value', '');
        emailInput().should('have.value', '');
        passInput().should('have.value', '');
        errors().should('have.value', '');
    })
})
})
