describe("User Onboarding Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const firstName = () => cy.get('[for="first_name"]')
    const lastName = () => cy.get('[for="last_name"]')
    const emailInput = () => cy.get('[for="email"]')
    const passwordInput = () => cy.get('[for="password"]')
    const checkbox = () => cy.get('[for="terms"]')


    it ("Sanity Check", () => { 
        expect(2 + 2).to.equal(4);
    })

    it("Check first name input functionality", () => {
        firstName()
            .should("have.value", "")
            .type("Morgan")
            .should("have.value", "Morgan")
    })

    it("Check last name input functionality", () => {
        lastName()
            .should("have.value", "")
            .type("Williamson")
            .should("have.value", "Williamson")
    })

    it("Check email input functionality", () => {
        emailInput()
            .should("have.value", "")
            .type("morgan.williamson@lambda.com")
            .should("have.value", "morgan.williamson@lambda.com")
    })

    it("Check password input functionality", () => {
        passwordInput()
            .should("have.value", "")
            .type("testpassword")
            .should("have.value", "testpassword")
    })

    it("Check checkbox functionality", () => {
        checkbox()
            .should("not.be.checked")
            .click()
            .should("be.checked")
    })
})