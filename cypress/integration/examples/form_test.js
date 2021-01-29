describe("Name", () => {
  beforeEach(() => {
    //code you want before you start your test
    cy.visit("http://localhost:3000/");
  });
  it('WORKING', () => {
    expect( 1 + 2 ).to.equal(3);
    
  });

  it("Name", () => {
    cy.get('input[name="first_name"]').should("exist");
    
  })

  it("Email", () => {
    cy.get('input[name="email"]').should("exist");
  })

  it("Password", () => {
    cy.get('input[name="email"]').should("exist");
  })

})