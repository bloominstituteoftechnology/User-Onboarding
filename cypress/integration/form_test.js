
describe("Form inputs", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost");
  });

  //  Get the Name input,type a name in it and verify name is there.
  it("grab name input, type joey in it & verify joey is in it", () => {
    cy.get("input[name='name']").type("joey").should("have.value", "joey");
  });

  //  Get the Email input and type an email address in it
  it("get the email input and type an email address in it", () => {
    cy.get('input[name="email"]').type("joey@joey.com");
  });

  //  Get the password input and type a password in it
  it("get the password input and type a password in it", () => {
    cy.get("input[name='password']").type("password");
  });

  //  Set up a test that will check to see if a user can check the terms of service box
  it("set up a test that will check to see if a user can check the TOS box", () => {
    cy.get("input[name='terms']")
      .not("[disabled]")
      .check()
      .should("be.checked");
  });

  //  Check to see if a user can submit the form data
  it("check to see if a user can submit the form data", () => {
    cy.get("button.submit").should("not.be.disabled");
  });

  //  Check for form validation if an input is left empty
  it("check for form validation if any input is left empty", () => {
    cy.get("input[name='name']").should("not.have.value");
    cy.get("input[name='email']").should("not.have.value");
    cy.get("input[name='password']").should("not.have.value");
    cy.get("input[name='terms']").should("be.checked");
  });
});
