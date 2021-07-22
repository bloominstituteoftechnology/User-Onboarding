/**
 * Thomas Bielawski
 * Lambda Schoot WEB 45
 * Cypress Testing form-test.js
 * 7/22/2021
 */

//Describe block takes 2 params, app + callback
describe("Form", () =>
{
    //Code to run before tests run
    beforeEach(() =>
    {
        //Load the localhost
        cy.visit("http://localhost:3000");
    });
    
    //Declare functions to test the inputs and buttons
    const nameInput = () =>  cy.get('input[name = "name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const termsInput = () => cy.get('input[name="terms"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');


    //Sanity testing
    it("Sanity Testing", () => 
    {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
    });

    //Name - text input
    it("Name input", () =>
    {
        nameInput()
          .should("exist")
          //Should have empty string
          .should("have.value", " ")
          //Tests by inserting a string
          .type("test")
          //Tests that our test string is present
          .should("have.value", " test");
    });

    
    //Password - text input
    it("Password input", () =>
    {
        passwordInput()
           .should("exist")
          //Should have empty string
          .should("have.value", " ")
          //Tests by inserting a string
          .type("password")
          //Tests that our test string is present
          .should("have.value", " password"); 
    });

    //Email input
    it("Email input", () =>
    {
        emailInput()
          .should("exist")
          //Should have empty string
          .should("have.value", "")
          //Tests by inserting a string
          .type("email@email.com")
          //Tests that our test string is present
          .should("have.value", "email@email.com");
    });

    //TOS input
    it("TOS input", () =>
    {
        //Should exist
        termsInput()
          .should("exist")
          //Can click
          .click()
          //Can double-click
          .dblclick();
    });

    //Submit form data
    it("Submit button", () =>
    {
        //Should exist
        submitBtn()
          .should("exist")
          .should('be.disabled')

          //Attempt to type in Name field 
          nameInput().type("name")
        
          //Attempt to type the password
          passwordInput().type("password")

          //Attempt to type in email field 
          emailInput().type("email@email.com")

          //Click the TOS box
          termsInput().click()

          //Should no longer be disabled
          submitBtn().should("not.be.disabled");
    });

});