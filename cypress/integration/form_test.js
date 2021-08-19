describe('Onboarding App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
      });
    
    
    it("sanity check", () => {
        expect(5).to.equal(5);
        expect(1 + 2).to.equal(3);
        expect({}).to.not.equal({}); 
        expect({}).to.eql({}); 
      });

      const usernameInput = () => cy.get('input[name="username"]');
      const emailInput = () => cy.get('input[name="email"]');
      const newEmail = "marciesemail@email.com";
      const passwordInput = () => cy.get('input[name="password"]');
      const newPassword = "drowssap";
      const checkBox = () => cy.get('input[type="checkbox"]');
      const submitBtn = () => cy.get('button');

      it('Checks form Fields, Submit, and Validation', () => {
        usernameInput()
        .should("exist")
        .should("have.value", "")
        .type("marciemaclean")
        .should("have.value", "marciemaclean");

        emailInput()
        .should("exist")
        .should("have.value", "")
        .type(newEmail)
        .should("have.value", newEmail);
        
        passwordInput()
        .should('exist')
        .should('have.value', "")
        .type(newPassword)
        .should('have.value', newPassword)

        checkBox()
        .check()
        submitBtn().click();
      }); 
});