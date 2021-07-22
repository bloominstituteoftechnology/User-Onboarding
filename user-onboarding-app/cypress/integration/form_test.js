describe("User Onboarding app",()=>{

    const userInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const termsInput = () => cy.get("input[name=terms]");
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    beforeEach(()=>{
        cy.visit("http://localhost:3000")
    })

    it("check if the right elements are showing",() => {
        userInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        termsInput().should('exist')
        submitBtn().should('exist')
    })

})