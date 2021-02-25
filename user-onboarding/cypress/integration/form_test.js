describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=agree]')
    const submitBtn = () => cy.get('button[id=submitBtn]')
    const errorDiv = () => cy.get('div[name=error]')

    it('sanity check', () => {
        expect(1+1).to.equal(2)
    })

    it('Content Checks', () => {
        nameInput().type('B-Rad')
        emailInput().type('check@email.com')
        passwordInput().type('testpassword')
        termsInput().click()
        errorDiv().should('have.value', '')
        submitBtn().click()
    })

    it('validation checks', () => {
        nameInput().type('ab')
        

    })
})