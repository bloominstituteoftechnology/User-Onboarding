describe("My App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
  
    const nameInput = () => cy.get("input[name=name]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const cardInput = () => cy.get("input[name=card]");
    const num3Input = () => cy.get("input[name=num3]");
    const termBoxes = () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get("button[id='submitBtn']");
    const foobarInput = () => cy.get("input[name=foobar]");
  
    it("Sanity Check", () => {
      expect(1 + 2).to.equal(3);
      expect(2 + 2).not.to.equal(5);
      expect({}).not.to.equal({});
      expect({}).to.eql({});
    });
  
    it("The proper elements are showing", () => {
      nameInput().should("exist");
      emailInput().should("exist");
      passwordInput().should("exist");
      termBoxes().should("exist");
      cardInput().should("exist");
      num3Input().should("exist");
      submitBtn().should("exist");
      foobarInput().should("not.exist");
    });
    describe("filling out the inputs and canceling", () => {
      it("can navigate to the url", () => {
        cy.url().should("include", "localhost");
      });
  
      it("submit button starts out disabled", () => {
        submitBtn().should("be.disabled");
      });
  
      it("can type in the inputs", () => {
        nameInput()
          .should("have.value", "")
          .type("something")
          .should("have.value", "something");
        emailInput()
          .should("have.value", "")
          .type("something")
          .should("have.value", "something");
        passwordInput()
          .should("have.value", "")
          .type("something")
          .should("have.value", "something");
        cardInput()
          .should("have.value", "")
          .type("1234567890123456")
          .should("have.value", "1234567890123456");
        num3Input()
          .should("have.value", "")
          .type("123")
          .should("have.value", "123");
      });
  
      it("the submit button enables when both inputs are filled out", () => {
        nameInput().type("something");
        emailInput().type("something");
        passwordInput().type("something");
        cardInput().type("1234567890123456");
        num3Input().type("123");
  
      });
      describe("Functionality test", () => {
          it("Button starts disabled", () => {
              submitBtn().should("be.disabled");
              nameInput().should("have.value", "")
                  .type("Butt Ox");
              emailInput().should("have.value", "")
                  .type("Xx_Cheecks_xX@bottom.com");
              passwordInput().should("have.value", "")
                  .type("Coder");
              cardInput().should("have.value", "")
                  .type("1111222233334444");
              num3Input().should("have.value", "")
                  .type("456")
              termBoxes().check();
              submitBtn().click();
          })
  
  
        it("variation of can submit a new quote", () => {
          cy.contains("Lorem Ipsum").should("not.exist");
          nameInput().type("Bot");
          emailInput().type("something");
      
      
        });
  
        describe("editing an existing quote", () => {
          it("can edit a quote", () => {
            nameInput().type("blah");
            emailInput().type("Biggus");
            emailInput().should("have.value", "Biggus");
            nameInput().should("have.value", "blah");
            nameInput().type("blah blah");
            emailInput().type("Dickus");
            passwordInput().should('have.value', '');
            passwordInput().type('blah');
            cardInput().should('have.value', '');
            cardInput().type('5555666677778888')
            num3Input().should('have.value', '');
            num3Input().type('789')
            termBoxes().check();
            submitBtn().click(); 
  
          });
        });
      });
    });
  }); 