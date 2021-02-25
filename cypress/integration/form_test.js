describe("Quotes app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // Helps to centeralize our CSS selectors and clean up the tests a bit and keep the DRY
  const nameInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const termsCheckbox = () => cy.get("input[name=terms]");
  const submitButton = () => cy.get("button[type=submit]");
  const errors = () => cy.get(".errors").children();

  it("sanity check to make sure our tests work", () => {
    expect(1 + 1).to.equal(2);
    expect(1 + 1).not.to.equal(3);
    expect(7).to.equal(7);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  });

  describe("MVP Tests", () => {
    it("Get the Name input and type a name in it.", () => {
      nameInput().type("Mclovin").should("have.value", "Mclovin");
    });

    it("Get the Email input and type an email address in it", () => {
      emailInput()
        .type("Mclovin@mclovin.com")
        .should("have.value", "Mclovin@mclovin.com");
    });

    it("Get the password input and type a password in it", () => {
      passwordInput()
        .type("mclovinunderage")
        .should("have.value", "mclovinunderage");
    });

    it("Set up a test that will check to see if a user can check the terms of service box", () => {
      termsCheckbox().check().should("be.checked");
    });

    it("Check to see if a user can submit the form data", () => {
      nameInput().type("Mclovin").should("have.value", "Mclovin");
      emailInput()
        .type("Mclovin@mclovin.com")
        .should("have.value", "Mclovin@mclovin.com");
      passwordInput()
        .type("mclovinunderage")
        .should("have.value", "mclovinunderage");
      termsCheckbox().check().should("be.checked");
      submitButton().should("be.enabled");
      submitButton().click();
      nameInput().should("have.value", "");
      passwordInput().should("have.value", "");
      emailInput().should("have.value", "");
    });

    it("Check for form validation if an input is left empty", () => {
      nameInput().type("Mclovin").clear();
      emailInput()
        .type("Mclovin@mclovin.com")
        .should("have.value", "Mclovin@mclovin.com");
      passwordInput()
        .type("mclovinunderage")
        .should("have.value", "mclovinunderage");
      termsCheckbox().check().should("be.checked");
      errors().should("exist");
    });
  });
});
