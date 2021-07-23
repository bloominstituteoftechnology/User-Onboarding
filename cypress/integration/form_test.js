describe('Onboarding App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
      });
    
    
    it("sanity check", () => {
        //assertion(s)
        expect(5).to.equal(5);
        expect(1 + 2).to.equal(3);
        expect({}).to.not.equal({}); // can use "equal" here// and not strict i.e. (==)
        expect({}).to.eql({}); //can't use equal here// and deeply strick i.e. (===)
      });

      const usernameInput = () => cy.get('input[name="username"]');
      const emailInput = () => cy.get('input[name="email"]');
      const newEmail = "RicksMyCodeGuy@gmail.com";
      const passwordInput = () => cy.get('input[name="password"]');
      const newPassword = "123456789";
      const checkBox = () => cy.get('input[type="checkbox"]');
      const submitBtn = () => cy.get('button');

      it('Checks form Fields, Submit, and Validation', () => {
        submitBtn().should("exist");
        submitBtn().should("be.disabled")
        usernameInput()
        .should("exist")
        .should("have.value", "")
        .type("Rick Mansfield")
        .should("have.value", "Rick Mansfield");
        submitBtn().should("be.disabled")

        emailInput()
        .should("exist")
        .should("have.value", "")
        .type(newEmail)
        .should("have.value", newEmail);
        submitBtn().should("be.disabled")
        
        passwordInput()
        .should('exist')
        .should('have.value', "")
        .type(newPassword)
        .should('have.value', newPassword)
        submitBtn().should("be.disabled")

        checkBox()
        .check()
        submitBtn().should("not.be.disabled");
        submitBtn().click();
      });

      // const emailInput = () => cy.get('input[name="email"]')
      // const newEmail = "RicksMyCodeGuy@email.com"
      // it('Gets Email and adds content', () => {
      //   emailInput()
      //   .should("exist")
      //   .should("have.value", "")
      //   .type(newEmail)
      //   .should("have.value", newEmail);
      // });
      
      
});
