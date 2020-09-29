describe("test", () => {
  describe("Navigation Test", () => {
    it("Can navigate to http://localhost:3000/", () => {
      cy.visit("http://localhost:3000/");
    });
  });
  describe("Tests creating a new user and submiting the form", () => {
    it("Name Tests.", () => {
      cy.visit("http://localhost:3000/");
      cy.get('input[name="first_name"]')
        .type("testFirstName")
        .should("have.value", "testFirstName");
      cy.get('input[name="last_name"]')
        .type("testLastName")
        .should("have.value", "testLastName");
      cy.get('input[name="email"]')
        .type("fakeEmail@fakeEmail.com")
        .should("have.value", "fakeEmail@fakeEmail.com");
      cy.get('input[name="password"]')
        .type("fakePassword")
        .should("have.value", "fakePassword");
      cy.get('input[name="tos"]').check();
      cy.get(".submit").click();
      cy.contains("testFirstName").should("exist");
    });
  });
  describe("Editing then Deleting a user", () => {
    it("Editing then Deleting Fake User", () => {
      cy.contains("testFirstName").next().next().click();
      cy.get('input[name="first_name"]').clear().type("Victor");
      cy.get(".submit").click();
      cy.contains("testFirstName").next().next().next().click();
    });
  });
  describe("Checking Form validation", () => {
    it("Checking Form validation", () => {
      cy.visit("http://localhost:3000/");
      cy.get('input[name="first_name"]')
        .type("testFirstName")
        .should("have.value", "testFirstName");
      cy.get('input[name="last_name"]').type("Dronov");
      cy.get('input[name="email"]').type("victor");
      cy.get('.email').contains('Must be a valid email address.').should("exist")
    });
  });
});
