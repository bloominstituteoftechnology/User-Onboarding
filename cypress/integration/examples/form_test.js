// descripe === context, it === specify, beforeEach

/*global cy */

describe("Test our form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });
  it("adds text to inputs", function () {
    cy.get('[data-cy="name"]').type("Luis").should("have.value", "Lus");
    cy.get('[data-cy="email"]')
      .type("luis@gmail.com")
      .should("have.value", "luis@gmail.com");
    cy.get('[data-cy="password"]')
      .type("Reinaldo@1")
      .should("have.value", "Reinaldo@1");
    // cy.get('textarea').type('i want to help').should('have.value', 'i want to help')
    cy.get("#role").select("teacher").should("have.value", "teacher");
    cy.get('[type="checkbox"]').check().should("be.checked");
    cy.contains("Submit").click();
    // cy.get("form").submit();
  });
});
