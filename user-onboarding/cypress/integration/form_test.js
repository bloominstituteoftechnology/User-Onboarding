/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const inputs = {
    name: () => cy.get("#name"),
    email: () => cy.get('#email'),
    password: () => cy.get('#password')
  };

  const labels = {
    name: () => cy.get('label[for="name"]'),
    email: () => cy.get('label[for="email"'),
    password: () => cy.get('label[for="password"]')
  };

  describe("MVP Tests", () => {
    it("name input exists and accepts input", () => {
      //click on label for input to reveal input or Cypress will throw an error
      labels.name().should("exist").click();
      inputs
        .name()
        .should("exist")
        .type("That Guy")
        .should("have.value", "That Guy");
    });

    it("email input exists and accepts input", () => {
        //click on label for input to reveal input or Cypress will throw an error
        labels.email().should("exist").click();
        inputs
          .email()
          .should("exist")
          .type("foo@bar.com")
          .should("have.value", "foo@bar.com");
      });

      
    it("password input exists and accepts input", () => {
        //click on label for input to reveal input or Cypress will throw an error
        labels.password().should("exist").click();
        inputs
          .password()
          .should("exist")
          .type("password")
          .should("have.value", "password");
      });

  });
});
