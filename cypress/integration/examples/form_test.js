const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsButton = () => cy.get('input[name="terms"]')
const submitButton = () => cy.get('.submit')

const nameValidation = "Name must be at least 3 characters long"
const emailValidation = "must be a valid email"
const passwordValidation = "Password must be five characters or more"

it("sanity test to make sure tests work", () => {
    // expect is an assertion
    // there can be many assertions per test
    // though inside the it statement (the test) usually
    // they are logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });


it('Index html loads', function() {
    cy.visit("index.html");
})


it("elements are showing on screen", function() {
    nameInput().should("exist");
    cy.get('input[name="falseword"]').should("not.exist");
    emailInput().should("exist");
    passwordInput().should("exist");
    termsButton().should("exist");
    submitButton().should("exist");
    cy.contains("Submit");

})

it("can type in input fields", () => {
    nameInput()
    .should("have.value", "")
    .type("Harry")
    .should("have.value", "Harry");

    emailInput()
    .should("have.value", "")
    .type("argy@bargy.com")
    .should("have.value", "argy@bargy.com");

    passwordInput()
    .should("have.value", "")
    .type("badpassword")
    .should("have.value", "badpassword");

})

it("can check the TOS button", () => {
    termsButton().should("not.be.disabled");
    termsButton().check()
    termsButton().should("be.checked")
    termsButton().uncheck()
    termsButton().should("not.be.checked")
    
})

it("can submit a full form", () => {
    nameInput().clear().type("harry");
    passwordInput().clear().type("badpass");
    emailInput().clear().type("argy@bargy.com");
    termsButton().check();
    submitButton().should("be.enabled")
    submitButton().click()

})

it("validation must pass for submit button to open", () => {
    submitButton().should("be.disabled");

    nameInput().type("ha");
    cy.contains(nameValidation);
    nameInput().clear().type("Harry");
    submitButton().should("be.disabled");

    emailInput().clear().type("har");
    cy.contains(emailValidation);
    emailInput().clear().type("argy@bargy.com");
    submitButton().should("be.disabled");

    passwordInput().clear().type("har");
    cy.contains(passwordValidation);
    passwordInput().clear().type("badpassword");
    submitButton().should("be.disabled");

    termsButton().check();
    submitButton().should("be.enabled");
    termsButton().uncheck();
    submitButton().should("be.disabled");


})