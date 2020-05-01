describe("Test our form inputs", function(){
    beforeEach(function(){
        cy.visit("http://localhost:3000/");
    })
    it("add texts to inputs and submit form", function(){
        cy.get('[data-cy="name"]').type("Lexi").should("have.value", "Lexi");
        cy.get('[data-cy="email"]').type("lexi@email.com").should("have.value","lexi@email.com");
        cy.get('[data-cy="password"]').type("password1").should("have.value","password1");
        cy.get('[type="checkbox"]').check().should("be.checked");
        cy.get("form").submit();
    });

})