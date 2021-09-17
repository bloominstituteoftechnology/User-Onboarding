describe("SignUp App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3002/");
  });

  const userNameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsCheck = () => cy.get("input[name=terms]");
  const submitBtn = () => cy.get("button[id='submitBtn']");
  const cancelBtn = () => cy.get("button[id=cancelBtn]");

  it("sanity check to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });
  it("the proper elements are showing", () => {
    userNameInput().should("exist");
    emailInput().should("exist");
    cancelBtn().should("not.exist");
    passwordInput().should("exist");
    termsCheck().should("exist");
    submitBtn().should("exist");
  });

  describe("Filling out the input", () => {
    it("submit button starts out disabled", () => {
      submitBtn().should("be.disabled");
    });

    it("can type in the inputs", () => {
      userNameInput()
        .should("have.value", "")
        .type("johnsmith")
        .should("have.value", "johnsmith");
      emailInput()
        .should("have.value", "")
        .type("johnsmith@aol.com")
        .should("have.value", "johnsmith@aol.com");
      passwordInput()
        .should("have.value", "")
        .type("password123")
        .should("have.value", "password123");
      termsCheck()
        .should("have.value", "false")
        .check()
        .should("have.value", "true");
    });

    it("the submit button enables when both inputs are filled out", () => {
      userNameInput().type("johnsmith");
      emailInput().type("johnsmith@aol.com");
      passwordInput().type("password123");
      termsCheck().check();
      submitBtn().should("not.be.disabled");
    });

    it("form can be submitted after everything is filled out", () => {
      userNameInput().type("johnsmith");
      emailInput().type("johnsmith@aol.com");
      passwordInput().type("password123");
      termsCheck().check();
      submitBtn().click();
    });

    it("form resets after being submitted", () => {
      userNameInput().type("johnsmith");
      emailInput().type("johnsmith@aol.com");
      passwordInput().type("password123");
      termsCheck().check();
      submitBtn().click();
      userNameInput().should("have.value", "");
      emailInput().should("have.value", "");
      passwordInput().should("have.value", "");
      termsCheck().should("have.value", "false");
    });

    it("form validation for a blank input", () => {
      userNameInput().type("johnsmith");
      emailInput().type("johnsmith@aol.com");
      passwordInput().type("password123");
      termsCheck().check();
      userNameInput().clear();
      submitBtn().click();
      cy.contains("Username is required!").should("exist");
    });
  });
});
