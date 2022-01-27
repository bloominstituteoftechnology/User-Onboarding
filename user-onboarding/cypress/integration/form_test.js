describe("user onboarding App", () => {
  beforeEach(() => {
    cy.visit("localhost:3000");
  });
  const firstName = () => cy.get("input[name=firstName]");
  const lastName = () => cy.get("input[name=lastName]");
  const email = () => cy.get("input[name=email]");
  const password = () => cy.get("input[name=password]");
  const termOfService = () => cy.get("input[name=service]");
  const createBtn = () => cy.get("button");
  it("the propwer elements are showing", () => {
    firstName().should("exist");
    lastName().should("exist");
    email().should("exist");
    password().should("exist");
    termOfService().should("exist");
    createBtn().should("exist");
  });
  describe("filling the inputs out and the button enables", () => {
    it("can navigate to the page", () => {
      cy.url().should("include", "localhost");
    });
    it("submit button starts out disabled", () => {
      createBtn().should("be.disabled");
    });

    it("all the inputs work", () => {
      firstName()
        .should("have.value", "")
        .type("william")
        .should("have.value", "william");

      lastName()
        .should("have.value", "")
        .type("velichko")
        .should("have.value", "velichko");

      email()
        .should("have.value", "")
        .type("williamvelichko200313@gmail.com")
        .should("have.value", "williamvelichko200313@gmail.com");

      password()
        .should("have.value", "")
        .type("123456")
        .should("have.value", "123456");

      termOfService();
      cy.get('[type="checkbox"]').check();
    });

    it("the button enables", () => {
      firstName().type("william");
      lastName().type("velichko");
      email().type("willvel200313@gmail.com");
      password().type("123456");
      createBtn().should("not.be.disabled");
    });
  });
  describe("submit the data", () => {
    it("buttons can submit data", () => {
      firstName().type("john");
      lastName().type("velichko");
      email().type("john200313@gmail.com");
      password().type("123456");
      createBtn().click();

      cy.contains("johnvelichko").should("exist");
      cy.contains("john200313@gmail.com").should("exist");
    });
    it("inputs are all empty and button is disabled", () => {
      firstName().type("steven");
      lastName().type("velichko");
      email().type("steven200313@gmail.com");
      password().type("123456");
      createBtn().click();
      firstName().should("have.value", "");
      lastName().should("have.value", "");
      email().should("have.value", "");
      password().should("have.value", "");
      createBtn().should("be.disabled");
    });
  });
});
