describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  // Get the Name input and type a name in it.

  const nameInput = () => cy.get('input[name="name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const submitButton = () => cy.get("#submit-button");
  const checkedTerms = () => cy.get('input[name="terms"]');

  it("sanity test to see if the test works", () => {
    expect(2 + 2).to.equal(4);
  });

  // Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
  it("the correct elements are showing on the screen", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    submitButton().should("exist");
    checkedTerms().should("exist");
    cy.contains("Submit");
  });

  // Get the Email input and type an email address in it
  // Get the password input and type a password in it
  // Set up a test that will check to see if a user can check the terms of service box
  // Check for form validation if an input is left empty
  it("type in the inputs is a success", () => {
    nameInput()
      .should("have.value", "")
      .type("Elizabeth")
      .should("have.value", "Elizabeth");
    emailInput()
      .should("have.value", "")
      .type("e@e.com")
      .should("have.value", "e@e.com");
    passwordInput()
      .should("have.value", "")
      .type("hellothere")
      .should("have.value", "hellothere");
    checkedTerms().click();
  });

  // Check to see if a user can submit the form data
  it("form data is able to be submitted", () => {
    cy.contains("Elizabeth").should("not.exist");
    nameInput().type("Elizabeth");
    emailInput().type("e@e.com");
    passwordInput().type("hellothere");
    checkedTerms().click();
    submitButton().click();
    cy.contains("Elizabeth").should("exist");
  });
});
