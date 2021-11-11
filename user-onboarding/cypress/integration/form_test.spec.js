describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const firstNameInput = () => cy.get("input[name=firstName]");

  it("Sanity check to make sure tests are working", () => {
    expect(2 + 2).to.equal(4);
  });

  it("the proper elements are showing", () => {
    firstNameInput().should("exist");
  });
});
