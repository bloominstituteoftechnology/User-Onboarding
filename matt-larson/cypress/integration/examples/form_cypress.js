describe("App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsCheck = () => cy.get('input[name="terms"]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')

    it('checks input boxes', () => {
        nameInput()
            .should('have.value', '')
            .type('Declan Casey')
            .should('have.value', 'Declan Casey')

        emailInput()
            .should('have.value', '')
            .type('dpcaseyboy99@gmail.com')
            .should('have.value', 'dpcaseyboy99@gmail.com')

            passwordInput()
                .should('have.value', '')
                .type('password1234*')
                .should('have.value', 'password1234*')
    })

    it('checks to see if checks can be checked', () => {
        termsCheck()
            .not('be.checked')
            .check()
    })

    it('checks to see if the submit buttin will render to the page', () => {
        nameInput().type("Declan")
        emailInput().type('dpcaseyboy99@gmail.com')
        passwordInput().type('password1234*')
        termsCheck().check()
        submitBtn().click()
        nameInput().should("have.value", "")
        emailInput().should("have.value", "")
        passwordInput().should("have.value", "")
        submitBtn().should("not.be.enabled")
    })

    it('teases my code when its bad', () => {
        nameInput().type("De")
        emailInput().type('dpc')
        passwordInput().type('y')
    })

})