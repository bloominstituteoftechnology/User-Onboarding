describe("Form app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("sanity test to make sure tests work", () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  const textInput = () => cy.get('input[name="name"]');

  //Get the `Name` input and type a name in it.
  it("Get the `Name` input and type a name in it.", () => {
    textInput().type("NAME");
  });

  it("Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion", () => {
    textInput().type("NAME");
    textInput().should("have.value", "NAME");
  });

  it("Get the `Email` input and type an email address in it", () => {
    cy.get('input[name="email"]').type("anemail@address.com");
  });

  it("Get the `password` input and type a password in it", () => {
    cy.get('input[name="password"]').type("password");
  });

  it("Set up a test that will check to see if a user can check the terms of service box", () => {
    cy.get('input[name="terms"]').trigger("checked");
  });

  it("Check to see if a user can submit the form data", () => {
    textInput().type("A NAME");
    cy.get('input[name="email"]').type("anemail@address.com");
    cy.get('input[name="password"]').type("password");
    cy.get('input[name="terms"]').trigger("checked");
    cy.get("button").click();
  });

  it("Check for form validation if an input is left empty", () => {
    it("Check for form validation if an input is left empty", () => {
      textInput().type("").should("not.have.value", "");

      cy.get('input[name="email"]').type("1").should("not.have.value", "");

        cy.get('input[name="password"]').type("1").should("not.have.value", "");
        
      cy.get('input[name="terms"]').trigger("on").should("have.value", "on");
    });
}); //this is the final bracket
