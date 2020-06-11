describe("Form - testing our form inputs", function () {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    });
    it("add text to inputs and submit form", function () {
        // we added 'data-cy' attributes to inputs inside of Form.js
        cy.get('[data-cy="name"]').type("Emily").should("have.value", "Emily");
        cy.get('[data-cy="email"]')
            .type("test@gmail.com")
            .should("have.value", "test@gmail.com");
        cy.get("[data-cy=password]")
            .type("MyDadRock$")
            .should("have.value", "MyDadRock$");
        cy.get('[type="checkbox"]').check().should("be.checked");
        cy.get("[type=submit]").click();

    });
    it("checks for form validation if inputs are empty", function () {
        // cy.get('[data-cy="name"]')
        //     .type(".").type(backspace).should("have.value", "");
        cy.get('[type="checkbox"]').check().check();
    })
})