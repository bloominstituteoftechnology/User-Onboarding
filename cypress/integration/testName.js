describe("Form test", () => {
    it("Can fill the name", () => {
      cy.visit("http://localhost:3000/add");
      cy.get("form");
  
      cy.get('input[name="name"]').type("Paul Menard") 
      .should('have.value', "Paul Menard");
      
     
    });

    it("Can fill the email", () => {
        cy.visit("http://localhost:3000/add");
        cy.get("form");
    
        cy.get('input[name="email"]').type("clmonitor2013@gmail.com") 
        .should('have.value', "clmonitor2013@gmail.com");
        
       
      });

      it("Can fill the password", () => {
        cy.visit("http://localhost:3000/add");
        cy.get("form");
    
        cy.get('input[name="password"]').type("jacob123") 
        .should('have.value', "jacob123");
        
       
      });
    
  });