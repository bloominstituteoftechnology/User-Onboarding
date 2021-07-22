describe("User Onboarding app",()=>{

    const userInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const termsInput = () => cy.get("input[name=terms]");
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    });

    it("check if the right elements are showing",() => {
        userInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsInput().should('exist')
        submitBtn().should('exist')
    });

    it("get the user input and type a name in it",() => {
        userInput().pause()
          .should("have.value","")
          .type("Greg")
          .should("have.value","Greg")
    });

    it("get the email input and type a address in it",() => {
        emailInput()
          .should("have.value","")
          .type("greg@reqres.in")
          .should("have.value","greg@reqres.in")
    });

    it("get the password input and type a password in it",() => {
        passwordInput()
          .should("have.value","")
          .type("gregspassword")
          .should("have.value","gregspassword")
    });

    it("check to see if a user can check the terms",() => {
        termsInput().click()
    });

    it("Check to see if a user can submit the form data",() => {
        userInput().type("Greg")
        emailInput().type("greg@reqres.in")
        passwordInput().type("gregspassword")
        termsInput().click().pause()
        submitBtn().click()
        userInput().should("have.value","")
        emailInput().should("have.value","")
        passwordInput().should("have.value","")
    });

    it("check for form validation if an input is left empty",() => {
        userInput().should("have.value","")
        emailInput().should("have.value","")
        passwordInput().should("have.value","")
        submitBtn().click()
    })

})