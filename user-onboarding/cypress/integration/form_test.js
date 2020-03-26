describe("Testing our user onboarding form", function() {
    beforeEach(function() {
      cy.visit("http://localhost:3000/");
    });
    it("Add test to inputs and submit form", function() {
      cy
      .get('input[name="name"]')
      .type("Jack Daly")
      .should("have.value", "Jack Daly")
      cy
      .get('input[name="email"]')
      .type("jcdaly97@gmail.com")
      .should("have.value", "jcdaly97@gmail.com")
      cy
      .get('input[name="password"]')
      .type("abcd1234")
      .should("have.value", "abcd1234")
      cy
      .get('[type=checkbox]')
      .check()
      .should("be.checked")
      cy
      .get('button')
      .click()
    });
  });