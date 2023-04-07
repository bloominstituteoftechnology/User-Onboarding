describe("User App", () => {
  beforeEach(() => {
    cy.visit(" http://localhost:3000");
  });

  //helpers

  const nameInput = () => cy.get("input[ name = name]");
  const emailInput = () => cy.get("input[ name = email]");
  const passwordInput = () => cy.get("input[ name = password]");
  const termsCheckbox = () => cy.get("input[ type = checkbox]");
  const submitBtn = () => cy.get(`button[id = "submitBtn"]`);
  const dropDown = () => cy.get("select");

  it("sanity check", () => {
    expect(1 + 2).to.equal(3);
    expect("Aaron").to.equal("Aaron");
  });

  it("Checking if elements are working", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsCheckbox().should("exist");
    submitBtn().should("exist");
    dropDown().should("exist");
  });

  describe("Filling out inputs and submitting", () => {
    it("can navigate to site", () => {
      cy.url().should("include", "localhost");
    });
    it("submit button is initially disabled", () => {
      submitBtn().should("be.disabled");
    });

    it("Checking inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("Aaron Belmore")
        .should("have.value", "Aaron Belmore");

      emailInput()
        .should("have.value", "")
        .type("bmoreaaron33@gmail.com")
        .should("have.value", "bmoreaaron33@gmail.com");

      dropDown()
        .should("have.value", "select level")
        .select("Beginner")
        .should("have.value", "Beginner");

      passwordInput()
        .should("have.value", "")
        .type("Pitkor33@")
        .should("have.value", "Pitkor33@");

      termsCheckbox().should("not.be.checked").check().should("be.checked");

      submitBtn().should("not.be.disabled").click();
    });
  });
});
