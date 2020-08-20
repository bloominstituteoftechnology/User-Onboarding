describe("test", () => {
  describe("Navigation Test", () => {
    it("Can navigate to http://localhost:3000/", () => {
      cy.visit("http://localhost:3000/");
    });
  });
  describe("Tests submit button before and after input into the form fields & the input fields", () => {
    it("Name Tests.", () => {
      cy.get('input[name="first_name"]').type("testFirstName");
      cy.get('input[name="last_name"]').type("testLastName");
      cy.get('input[name="email"]').type("fakeEmail@fakeEmail.com");
      cy.get('input[name="password"]').type("fakePassword");
      cy.get("input[type=text]").clear();
    });
  });
});
