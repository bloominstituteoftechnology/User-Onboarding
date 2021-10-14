describe('User Form Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    // Helpers to centralize CSS selectors / DOM grabbing

    const firstNameInput = () => cy.get('input[name=first_name]')
    const lastNameInput = () => cy.get('input[name=last_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsOfService = () => cy.get('input[name=termsofservice]')
    const submitBtn = () => cy.get('button[id=submit]')

    it('Sanity Check', () => {
        expect(1 + 2).to.equal(3);
        expect(1 + 2).not.to.equal(10);
    })


});