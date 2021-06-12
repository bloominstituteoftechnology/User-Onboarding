/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const inputs = {
    name: () => cy.get("#name"),
  };

  const labels = {
    name: () => cy.get('label[for="name"]'),
  };

  describe("MVP Tests", () => {
    it("name input exists and accepts input", () => {
      //click on "name" label to reveal "name" input or it will throw an error
      labels.name().should("exist").click();
      inputs
        .name()
        .should("exist")
        .type("That Guy")
        .should("have.value", "That Guy");
    });
  });
});
