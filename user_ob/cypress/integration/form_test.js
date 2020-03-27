describe("Testing the User_OB form", function() {
  beforeEach(function() {
    cy.visit("http://localhost:3000/");
  });
  it("Add test to inputs and submit form", function() {
    cy.get('input[name="name"]')
      .type("Lisa")
      .should("have.value", "Lisa");
    cy.get('input[name="email"]')
     .type("email@email.com")
      .should("have.value", "email@email.com");
    cy.get('input[name="userPassword"]')
      .type("password")
      .should("have.value", "password");
    cy.get('[type="checkbox"]')
      .check()
      .should("be.checked");
    cy.get("button").click();
  });
  it("Checking for Validation", function() {
    cy.get('input[name="name"]')
    .type("Lisa")
    .clear()
    cy.get('.error')
    .contains("Please enter your name :)")
    cy.get('input[name="email"]')
     .type("email@email.com")
     .clear()
    cy.get('.error')
    .contains("Don't forget to enter your email! How else can we send you tons of junk mail?!")

  })
});
