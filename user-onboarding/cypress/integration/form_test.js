describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const firstNameInput = () => cy.get("input[name=first_name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosCheckbox = () => cy.get("input[name=termsOfService]");
  const submitButton = () => cy.get("button");

  describe("be able to type a name into the inputs", () => {
    it("can navigate to the site", () => {
      cy.url().should("include", "localhost:3000");
    });

    it("can type into input", () => {
      firstNameInput()
        .should("have.value", "")
        .type("Jerry")
        .should("have.value", "Jerry");
    });
  });
});
