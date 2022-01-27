describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const firstNameInput = () => cy.get("input[name=first_name]");
  const lastNameInput = () => cy.get("input[name=last_name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosCheckbox = () => cy.get("input[type='checkbox']");
  const submitButton = () => cy.get("button");
  const errorDiv = () => cy.get(".firstnameError");

  describe("be able to type a name into the inputs", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost:3000");
    });

    it("can type into input name and check terms of service", () => {
      firstNameInput()
        .should("have.value", "")
        .type("Jerry")
        .should("have.value", "Jerry");
    });

    it("can type into input email", () => {
      emailInput().should("have.value", "").type("js@gmail.com");
    });

    it("can type into input password", () => {
      passwordInput().should("have.value", "").type("George");
    });

    it("can check terms of service", () => {
      tosCheckbox().check();
    });

    describe("Can submit form and requires form validation to submit", () => {
      it("user can submit form data", () => {
        firstNameInput().type("Jerry");
        lastNameInput().type("Seinfeld");
        emailInput().type("js@gmail.com");
        passwordInput().type("George");
        submitButton().should("not.be.disabled");
        submitButton().click();
        cy.contains("Jerry").next().next().next().click();
      });

      it("there is form validation if an input is empty", () => {
        firstNameInput().should("have.value", "").type("je");
        firstNameInput().clear();
        errorDiv().should("have.value", "");
      });
    });
  });
});
