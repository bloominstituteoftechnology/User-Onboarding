describe("User Onboarding App", () =>{
    beforeEach(() =>{
        cy.visit("http://localhost:3000");
    });

    const nameInput = () => cy.get("input[name='username']");
    const emailInput = () => cy.get("input[name='email']");
    const passwordInput = () => cy.get("input[name='password']");
    const termsInput = () => cy.get("input[name='terms']");
    const button = () => cy.get("#button");



    it("Test", () =>{
        expect(1 + 2).to.equal(3);
        expect(3 + 4).not.to.equal(5);
    });

    it("checks to see that the DOM elements exist", () =>{
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        termsInput().should("exist");
        button().should("exist");

    })

    it("able to type name", () =>{
        nameInput().should("have.value", "");
        nameInput().type("Personal name");
        nameInput().should("have.value", "Personal name");
    });


    it("able to type email", () =>{
        emailInput().should("have.value", "");
        emailInput().type("random@email.com");
        emailInput().should("have.value", "random@email.com");
    });


    it("able to type password", () =>{
        passwordInput().should("have.value", "");
        passwordInput().type("Password1020");
        passwordInput().should("have.value", "Password1020");
    });

    it("able to check the box of terms of service", () =>{
        termsInput().should("have.value", "on");
        termsInput().check();
        termsInput().should("have.value", "on");
    });

    it("can submit data", () =>{
        cy.contains("Personal name").should("not.exist");
        cy.contains("random@email.com").should("not.exist");
        cy.contains("Password1020").should("not.exist");

        nameInput().type("Personal name");
        emailInput().type("random@email.com");
        passwordInput().type("Password1020");
        termsInput().check();
        button().click();

        cy.contains("Personal name").should("exist");
        cy.contains("random@email.com").should("exist");
        cy.contains("Password1020").should("exist");
    });



})