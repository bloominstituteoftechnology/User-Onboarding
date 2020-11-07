describe("My Project Test", function () {
  it("Loads the Website", () => {
    cy.visit("http://localhost:3002/");
  });

  it("Finds the Name Input", () => {
    cy.get('input[name="name"]')
      .type("Sample User")
      .should("have.value", "Sample User");
  });

  it("Finds the Email Input", () => {
    cy.get('input[name="email"]')
      .type("example@test.com")
      .should("have.value", "example@test.com");
  });

  it("Finds the Password Input", () => {
    cy.get('input[name="password"]')
      .type("RandomPassword")
      .should("have.value", "RandomPassword");
  });

  it("Agrees to the Terms", () => {
    cy.get('input[name="terms"]').click({ force: true }).should("be.checked");
  });

  it("Submits the Form", () => {
    cy.get('button[name="submit"]').click();
  });
});
