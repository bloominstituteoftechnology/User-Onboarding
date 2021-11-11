describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  const firstNameInput = () => cy.get("input[name=firstName]");
  const lastNameInput = () => cy.get("input[name=lastName]");

  it("Sanity check to make sure tests are working", () => {
    expect(2 + 2).to.equal(4);
    expect(50 + 50).to.equal(100);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });

  it("the proper elements are showing", () => {
    firstNameInput().should("exist");
    lastNameInput().should("exist");
  });
});
