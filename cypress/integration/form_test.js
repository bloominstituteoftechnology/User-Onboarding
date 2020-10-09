describe("test our form inputs", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
    it("add texts to inputs and submit form", () => {
      cy.get("[data-cy=name]").type("Emily").should("have.value", "Emily");
      cy.get("[data-cy=email]")
        .type("emily@lambda.com")
        .should("have.value", "emily@lambda.com");
      cy.get("[data-cy=password]")
        .type("password")
        .should("have.value", "password");
      cy.get("[type=checkbox]").check().should("be.checked");
      cy.get("[data-cy=submit]").click();
      cy.get("pre").should("exist");
    });

  });