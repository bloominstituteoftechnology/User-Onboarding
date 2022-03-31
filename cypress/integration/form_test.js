describe("Form App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3002");
    });
    const textInput = () => cy.get("input[type=text]");
    const emailInput = () => cy.get("input[type=email]");
    const passwordInput = () => cy.get("input[name=password]");
    const tosInput = () => cy.get("input[name=terms]");
  
    it("sanity check", () => {
      expect(1 + 1).to.equal(2);
    });
  
    it("checks if the elements are showing", () => {
      textInput().should("exist");
      emailInput().should("exist");
      passwordInput().should("exist");
      tosInput().should("exist");
    });
  
    it("checks if you can type in boxes", () => {
      textInput()
        .should("have.value", "")
        .type("It's working!!")
        .should("have.value", "It's Working!!");
    });
  
    it("checks the email box", () => {
      emailInput()
        .should("have.value", "")
        .type("bobbyhummer@goldface.com")
        .should("have.value", "bobbyhummer@goldface.com");
    });
  
    it("checks the password input field", () => {
      passwordInput()
        .should("have.value", "")
        .type("mypassword")
        .should("have.value", "mypassword");
    });
  });