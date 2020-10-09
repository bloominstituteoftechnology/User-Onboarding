describe("test our form inputs", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
    it("add texts to inputs and submit form", () => {
      cy.get("[data-cy=name]").type("Austin").should("have.value", "Austin");
      cy.get("[data-cy=email]")
        .type("austin@lambda.com")
        .should("have.value", "austin@lambda.com");
      cy.get("[data-cy=password]")
        .type("password")
        .should("have.value", "password");
      cy.get("[type=checkbox]").check().should("be.checked");
      cy.get("[data-cy=submit]").click();
      cy.get("pre").should("exist");
    //   cy.get('[data-cy=inputField]').should('have.value', '');
    });

  });