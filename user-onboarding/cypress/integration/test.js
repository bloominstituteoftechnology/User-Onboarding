describe('Forms App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosInput = () => cy.get('[type="checkbox"]')
    const submitInput = () => cy.get('input[type=submit]')
    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('proper elements', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        tosInput().should('exist')
        submitInput().should('exist')
    })

    it('typing in inputs', () => {
        nameInput().should('have.value','')
        .type('Rico').should('have.value', 'Rico');

        emailInput().should('have.value', '')
        .type('anemail@email.com')
        .should('have.value', 'anemail@email.com')

        passwordInput().should('have.value', '')
        .type('1234567').should('have.value', '1234567')
    })

    it('can accept tos', () => {
        tosInput().check().should('be.checked')
    })

    it('Submit check', () => {
        submitInput().click()
    })
})