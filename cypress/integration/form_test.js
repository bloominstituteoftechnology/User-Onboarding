/* eslint-disable no-undef */

describe("Member sign-up app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const firstNameInput = () => cy.get('input[name="first_name"]');
  const lastNameInput = () => cy.get('input[name="last_name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const tosAgreeInput = () => cy.get('input[name="tosAgree"]');


  it("sanity test to make sure tests work", () => {
    expect(2+2).to.equal(4);
    expect(2+2).to.equal(4);
  });

  it("Entering a name", () => {
    firstNameInput()
      .should("have.value", "")
      .type("Tess")
      .should("have.value", "Tess");
    lastNameInput()
      .should("have.value", "")
      .type("McTestington")
      .should("have.value", "McTestington");
  });

  it("Entering email", () => {
    emailInput()
      .should("have.value", "")
      .type("tess@testcorp.biz")
      .should("have.value", "tess@testcorp.biz");
  });

  it("Entering a password", () => {
    passwordInput()
      .should("have.value", "")
      .type("weakpassword")
      .should("have.value", "weakpassword")
  });

  it("Agreeing to Terms of Service box", () => {
    tosAgreeInput()
      .should('be.unchecked');
  })
});