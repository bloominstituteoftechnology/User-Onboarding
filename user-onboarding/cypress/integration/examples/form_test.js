describe("Form - testing user-onboarding form inputs", function () {
    
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });
  
    
    it("Add text to inputs and submit form", function () {
      
      cy.get('[data-cy="name"]').type("Priyanka").should("have.value", "Priyanka");

      cy.get('[data-cy="email"]')
        .type("testform@gmail.com")
        .should("have.value", "testform@gmail.com");

      cy.get("[data-cy=password]")
        .type("testform")
        .should("have.value", "testform");
        
      cy.get('[type="checkbox"]').check().should("be.checked");

      cy.get("[data-cy=submit]").click();
    });
  
    // run a second test
    it("Check for form validation if an input is left empty", () => {
        cy.get('[data-cy="name"]').type("Priyanka").should("have.value", "Priyanka");

        cy.get('[data-cy="email"]')
          .type("testform@gmail.com")
          .should("have.value", "testform@gmail.com");
  
        cy.get("[data-cy=password]")
          .type("")
          .should("have.value", "testform");
          
        cy.get('[type="checkbox"]').check().should("be.checked");
  
        cy.get("[data-cy=submit]").click();
      });  
    
  });