describe('Users App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const fNameInput = () => cy.get('input[name=first_name]');
    const lNameInput = () => cy.get('input[name=last_name]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const terms = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get('button');
    const foobarInput = () => cy.get('input[name=foobar]');

    it('Are tests working properly?', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(6);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Are all required elements showing?', () => {
        fNameInput().should('exist');
        lNameInput().should('exist');
        email().should('exist');
        password().should('exist');
        terms().should('exist');
        submitBtn().should('exist');
        foobarInput().should('not.exist');
    })

})