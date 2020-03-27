context("Test out inputs and submit our form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/Pform");
  });
  it("Add text to inputs and submit form"),
    () => {
      cy.get('input[name="flname"]')
        .type("Gracee")
        .should("have.value", "Gracee");
    };
});
