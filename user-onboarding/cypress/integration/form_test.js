describe("Get the name input", () => {
  beforeEach(function () {
    cy.visit("http://localhost:3002");
  });

  it("inputs name into the input", () => {
    cy.get('[cy-data="name"]')
      .type("Ben Venker")
      .should("have.value", "Ben Venker")

      .clear();
    cy.contains("Name is a required field!");
  });

  it("inputs an email into the input", () => {
    cy.get('[cy-data="email"]')
      .type("bvemails@gmail.com")
      .should("have.value", "bvemails@gmail.com");
  });

  it("should check the checkbox", () => {
    cy.get('input[type="checkbox"]').check().should("be.checked");
  });

  it("should submit the form", () => {
    cy.get("form").submit();
  });
});
