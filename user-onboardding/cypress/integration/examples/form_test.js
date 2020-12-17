describe("Form App", () => {
  beforeEach(() => {
    // arbitrary code you want running before tests start
    cy.visit("http://localhost:3000");
  });

  const nameInput = () => cy.get('input[name="username"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const tosInput = () => cy.get('input[name="read"]');
  const submitBtn = () => cy.get('#submit');

  it("sanity test to make sure tests work", () => {
    // false positive
    // 'expect' is an assertion
    // there can be many assertions per test
    // inside the 'it' statement (test) many assertions may be
    // logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

  it("Should reflect correct user input", () => {
    nameInput()
      .should("have.value", "")
      .type("jean luciano")
      .should("have.value", "jean luciano");

      emailInput()
      .should("have.value", "")
      .type("jeanluciano@mailbox.org")
      .should("have.value", "jeanluciano@mailbox.org");
  
    passwordInput()
      .should("have.value", "")
      .type("coder123")
      .should("have.value", "coder123");
  
    tosInput()
    .click()
    .should("have.value", "on")
    
  });

  it("should submit data", ()=>{
    nameInput().type("jean luciano")

    emailInput().type("jeanluciano@mailbox.org")
     
    passwordInput().type("coder123")

    tosInput().click()

    submitBtn().click()

    nameInput().should("have.value", "")

    emailInput().should("have.value", "")

  })

  it('has validation for empty inputs',()=>{
    nameInput().type("je");
    cy.contains("username must be 3 chars long").should("exist");

    passwordInput().type("not email")
    cy.contains("must be an email").should("exist");

    passwordInput().type("je")
    cy.contains("password must be 3 chars long").should("exist");
  })
});
