/*global cy */

context("Test our form inputs", function() {
    beforeEach(function () {
        cy.visit("http://localhost:3000/")
    });

    it("adds text to inputs and submits form", function () {
        cy.get('[data-cy=name]').type("Douglas").should("have.value", "Douglas");
        cy.get('[data-cy=email]').type("test@test.com").should("have.value", "test@test.com");
        cy.get('[data-cy=password]').type("password").should("have.value", "password");
        cy.get('[type="checkBox"]').check().should("be.checked");
        //cy.get('[data-cy="submit"]').click();
        cy.get("form").submit();
    })

    it("adds text to inputs and remove it to check validation", function () {
        cy.get('[data-cy=name]').type("Douglas").should("have.value", "Douglas");
        cy.get('[data-cy=name]').clear().should("have.value", "");
        cy.get('[data-cy=email]').type("test@test.com").should("have.value", "test@test.com");
        cy.get('[data-cy=email]').clear().should("have.value", "")
        cy.get('[data-cy=password]').type("password").should("have.value", "password");
        cy.get('[data-cy=password]').clear().should("have.value", "");
        cy.get('[type="checkBox"]').check().should("be.checked");
    })
});