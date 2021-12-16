describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
      const fNameInput = () => cy.get('input[name=first_name]');
      const lNameInput = () => cy.get('input[name=last_name]');
      const emailInput = () => cy.get('input[name=email]');
      const passInput = () => cy.get('input[name=password]');

    it('performing sanity check...', () => {
        expect(2 * 3).to.equal(6);
        expect(2 + 3).to.equal(5);
        expect({}).not.to.equal({});
    })

    it('filling out the inputs', () => {
        fNameInput().should('exist');
        lNameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist');
    })
      
    it('Checking name inputs', () => {
        fNameInput().type('My first name');
        lNameInput().type('My last name');
        fNameInput().should('have.value', 'My first name');
        lNameInput().should('have.value', 'My last name');
    })






})