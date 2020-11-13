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


})