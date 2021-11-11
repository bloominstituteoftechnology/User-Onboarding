describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });

  it("Sanity check to make sure tests are working", () => {
    expect(2 + 2).to.equal(4);
  });
});
