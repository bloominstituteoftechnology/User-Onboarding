describe("Testing form imputs", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("adding text and submitting form", () => {
    cy.get('[data-cy="name"]').type("Sarah").should("have.value", "Sarah");
    cy.get('[data-cy="email"]')
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
    cy.get('[data-cy="password"]')
      .type("12345678")
      .should("have.value", "12345678");
    cy.get('[data-cy="terms"]').check().should("be.checked");
    cy.bet("[data-cy=submit]").click
  });
});
