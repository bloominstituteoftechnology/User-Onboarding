describe("Volunteer Form Test", function() {
    it("Add test to inputs and submit form", function() {
      cy.visit("index.html");
    });
    it("Add test to input and submit form", function() {
      cy.get("input[data-cy=name]")
          .type("Christina")
          .should("have.value", "Christina");
      cy.get("input[data-cy=email]")
          .type("email@email.com")
      cy.get("input[data-cy=password]")
          .type("shadow")
          .should("have.value", "shadow");
      cy.get("select[data-cy=positions]")
          .select("gamer")
          .should("have.value", "gamer");
      cy.get("input[data-cy=terms]")
      .check()
          .should("be.checked")
      cy.get("button[data-cy=submit]").click();
      cy.wait(1000)
    });


    it("Test2", function() {
        cy.get("input[data-cy=name]")
            .type("Christina")
            .should("have.value", "Christina");
        cy.get("input[data-cy=email]")
            .type("emailemail.com")
      cy.get("div[data-cy=emailerror]")
              .should("have.text", "Please enter your email" )
        cy.get("input[data-cy=password]")
            .type("shadow")
            .should("have.value", "shadow");
        cy.get("select[data-cy=positions]")
            .select("gamer")
            .should("have.value", "gamer");
        cy.get("input[data-cy=terms]")
        .check()
            .should("be.checked")

      });
  });
  
    
