describe('User Onboarding', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('sanity checks', () => {
        expect(5).to.equal(5)
    })

    const name = () => cy.get("input[name='username']")
    const email = () => cy.get("input[name='email']")
    const password = () => cy.get("input[name='password']")
    const confirmPass = () => cy.get("input[name='confirmPassword']")
    const checkbox = () => cy.get("input[type='checkbox']")
    const submitButton = () => cy.get("button[class='btn btn-primary']")
    const form = () => cy.get("form[class='form']")

    it('the proper elements exist', () => {
        name().should('exist')
        email().should('exist')
        password().should('exist')
        confirmPass().should('exist')
        checkbox().should('exist')
        submitButton().should('exist')

    })
    
    it('submit button is disabled', () => {
        submitButton().should('be.disabled')
    })

    it('can type inside the username input', () => {
        name()
            .should('have.value', '')
            .type("Pennywise")
            .should('have.value', 'Pennywise')
    })

    it('can type inside the email input', () => {
        email()
            .should('have.value', '')
            .type("wise@copperClown.the")
            .should('have.value', 'wise@copperClown.the')
    })

    it('can type inside the password & confirm password inputs', () => {
        password()
            .should('have.value', '')
            .type('99redBalloons!')
            .should('have.value', '99redBalloons!')
        confirmPass()
            .should('have.value', '')
            .type('99redBalloons!')
            .should('have.value', '99redBalloons!') 
    })

    it('can check & uncheck the terms of service box', () => {
        checkbox()
            .check()
            .uncheck()
            
    })

    it('can validate form and submit data', () => {
        name().type("Pennywise")
        email().type("wise@copperClown.the")
        password().type('99redBalloons!')
        confirmPass().type('99redBalloons!')
        checkbox().check()
        submitButton().should('not.be.disabled')
        submitButton().click()
    })
})

