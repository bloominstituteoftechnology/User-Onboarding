
describe("Testing our form inputs", function() {
    beforeEach(function() {
   // eslint-disable-next-line no-undef
   cy.visit("http://localhost:3001/")
 });
 it("Adds text to inputs and submits form", function(){
     // eslint-disable-next-line no-undef
     cy.get('input[name="name"]')
     .type("Testing Name")
     .should("have.value", "Testing Name");
     cy.get('input[name="role"]')
     .type("Testing Role")
     .should("have.value", "Testing Role");
     cy.get('input[name="email"]')
     .type("testingEmail@email.com")
     .should("have.value", "testingEmail@email.com")
cy.get("button").click();
 })
}); 