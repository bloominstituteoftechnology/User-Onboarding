/* eslint-disable no-undef */
/// <reference types="cypress" />

context("Form Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const inputs = {
    name: () => cy.get("#name"),
    email: () => cy.get("#email"),
    password: () => cy.get("#password"),
    tosCheck: () => cy.get("#tosCheck"),
    role: () => cy.get('#role')
  };

  const labels = {
    name: () => cy.get('label[for="name"]'),
    email: () => cy.get('label[for="email"'),
    password: () => cy.get('label[for="password"]'),
  };

  const dummyText = {
    name: "That Guy",
    email: "foo@bar.com",
    password: "password",
  };

  const submitButton = () => cy.get('button[name="submit"]');

  describe("MVP Tests", () => {
    it("name input exists and accepts input", () => {
      //click on label for input to reveal input or Cypress will throw an error
      labels.name().should("exist").click();
      inputs
        .name()
        .should("exist")
        .type(dummyText.name)
        .should("have.value", dummyText.name);
    });

    it("email input exists and accepts input", () => {
      //click on label for input to reveal input or Cypress will throw an error
      labels.email().should("exist").click();
      inputs
        .email()
        .should("exist")
        .type(dummyText.email)
        .should("have.value", dummyText.email);
    });

    it("password input exists and accepts input", () => {
      //click on label for input to reveal input or Cypress will throw an error
      labels.password().should("exist").click();
      inputs
        .password()
        .should("exist")
        .type(dummyText.password)
        .should("have.value", dummyText.password);
    });

    it("can check Terms of Service box", () => {
      inputs.tosCheck().click();
      inputs.tosCheck().should("have.class", "filled-in");
    });

    it("can submit form data", () => {
      labels.name().click();
      inputs.name().type(dummyText.name);
      labels.email().click();
      inputs.email().type(dummyText.email);
      labels.password().click();
      inputs.password().type(dummyText.password);
      inputs.role().select("Project Manager")
      inputs.tosCheck().click();
      submitButton().should("exist").should("not.be.disabled");
    });
  });
});
