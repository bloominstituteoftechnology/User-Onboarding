describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const wrkPref = () => cy.get('input[name=wrkPref]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get(`input[name=submit]`)

    it('inputs exist', () => {
        usernameInput().should('exist');
        emailInput().should('exist');
        submitBtn().should('exist');
    })


}) //test end

