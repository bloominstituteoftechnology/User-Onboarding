context("Test out inputs and submit our form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Add text to inputs and submit form", () => {
    cy.get('input[name="Name"]')
      .type("Gracee")
      .should("have.value", "Gracee");
    cy.get('input[name="Email"]')
      .type("gracee@gmail.com")
      .should("have.value", "gracee@gmail.com");
    cy.get('input[name="Password"]')
      .type("blahblah")
      .should("have.value", "blahblah");
    cy.get('[type = "checkbox"]')
      .check()
      .should("be.checked");
    cy.get("button").click();
  });
});
