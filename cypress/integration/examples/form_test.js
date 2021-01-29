describe("Name", () => {
  beforeEach(() => {
    //code you want before you start your test
    cy.visit("http://localhost:3000/");
  });

  const nameInput = () => cy.get('input[name="first_name"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');

  it("It exist", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    cy.get('button[id="subbutton"]').should("exist");
    
    cy.contains("Terms Of Service")
  })

  it("Putting it in", () => {
    nameInput().should("have.value","")
    .type("Dwayne")
    .should("have.value","Dwayne");

    emailInput().should("have.value", "")
    .type("ididntknow@gmail.com")
    .should("have.value","ididntknow@gmail.com")

    passwordInput().should("have.value","")
    .type("somepass")
    .should("have.value","somepass")





  })

})
