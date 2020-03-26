describe("Test our inputs and submit our form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })
    it("Add text to inputs and submit form", () => {
        cy.get('[name="name"]')
            .type("Gordon")
            .should("have.value", "Gordon");
        cy.get('[name="email"]')
            .type("email@email.com")
            .should("have.value", "email@email.com");
        cy.get('input[name=password]')
            .type("asdf")
            .should("not.have.value", "")
        cy.get(':nth-child(10) > input')
            .check()
            .should("be.checked");
        cy.get("button")
            .click();
    })
})