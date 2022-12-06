describe('Format Test', () => {
    beforeEach(() => {

        cy.visit("http://localhost:3000");
    })
     // Helpers (ie GETTERS)
     const usernameInput = () => cy.get("input[name=username]");
     const emailInput = () => cy.get("input[name=email]");
     const passwordInput = () => cy.get("input[name=password]");
     const tosInput = () => cy.get("input[name=tos");
     const cafInput = () => cy.get("input[value='Create a Friend']");
     const foobarInput = () => cy.get("input[name=foobar]");
    
    
    it('Sanity Test', () => {
        expect(true).to.equal(true)
        expect(1+2).to.equal(3);
        expect(1+3).not.to.equal(6);
   
   })

   it("the proper elements are showing", () => {
        usernameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        tosInput().should("exist");
        cafInput().should("exist");
        foobarInput().should("not.exist");

        cy.contains("Create a Friend").should("exist");
    })

        describe ("Filling out the inputs and creating a friend", () => {
            it("can navigate to the site", () => {
                cy.url().should("include", "localhost");
            })

            it("can type in the inputs", () => {
                usernameInput()
                    .should("have.value", "")
                    .type("username test")
                    .should("have.value", "username test");

                emailInput()
                    .should("have.value", "")
                    .type("emailtest@k.com")
                    .should("have.value", "emailtest@k.com");

                passwordInput()
                    .should("have.value", "")
                    .type("password test")
                    .should("have.value", "password test");
            })
            it("can check the tos checkbox", () => {
                tosInput()
                    .should("not.be.checked")
                    .check({force:true})
                    .should("be.checked")
            })
            it("can create a friend", () => {
                usernameInput().type("thisisusername")
                emailInput().type("thisisemailtest@k.com")
                passwordInput().type("thisispasswordtest")
                tosInput().check({force:true})
                cafInput().click()

                cy.contains("thisisemailtest@k.com").should("exist");
            })
            it("cant create friend with missing input", () => {
                usernameInput().type("thisisusername")
                tosInput().check({force:true})
                cafInput().click()

                cy.contains("thisisemailtest@k.com").should("exist");
            })
        })




























})