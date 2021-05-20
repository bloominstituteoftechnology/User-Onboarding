describe('User OnBoarding Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })


    it('check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    const submitBtn = () => cy.get('button[id="submitBtn"]')
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsCheckBox = () => cy.get('input[name="termsOfService"]')

    it('proper elements are showing', () => {
        submitBtn().should('exist')
    })

    it('can type in name input', () => {
        nameInput()
            .should("have.value", "")
            .type("John")
            .should("have.value", "John")
    })

    it('can type in email input', () => {
        emailInput()
            .should("have.value", "")
            .type("john@aol.com")
            .should("have.value", "john@aol.com")
    })

    it('can type in password input', () => {
        passwordInput()
            .should("have.value", "")
            .type("abcpass")
            .should("have.value", "abcpass")
    })

    it('can check terms of service check box', () => {
        termsCheckBox()
            .check()
            .uncheck()
    })

    it('can submit form if required fields completed', () => {
        submitBtn()
            .should("be.disabled")
            nameInput().type("John")
            emailInput().type("john@aol.com")
            passwordInput().type("abcpass")
            termsCheckBox().check()
            submitBtn().should("not.be.disabled")

    })

    it('confirm submit button is disabled', () => {
        submitBtn()
            .should("be.disabled")
    })

})