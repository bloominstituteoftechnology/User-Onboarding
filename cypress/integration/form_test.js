describe("Testing form inputs", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    it("adding text to inputs and submits the form", () => {
      
      cy.get("[data-cy=name]").type("Alice").should("have.value", "Alice");
      
      cy.get("[data-cy=email]")
        .type("test@gmail.com")
        .should("have.value", "test@gmail.com");

      cy.get("data-cy=password")
      .type("password")
      .should("have.value", "password");

      cy.get("data-cy=passwordConfirmation")
      .type("password")
      .should("have.value", "password")
      
      cy.get("[data-cy=terms]").check().should("be.checked"); 
  
      cy.get("[data-cy=submit]").click();
    });
  });
   