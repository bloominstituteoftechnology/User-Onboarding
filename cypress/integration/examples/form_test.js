const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsButton = () => cy.get('input[name="terms"]')

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

//   it("can type in the inputs", () => {
//     // grab the inputs
//     // assert they are empty
//     // type in them
//     // assert that the thing we typed is there
//     textInput()
//       .should("have.value", "")
//       .type("NotHarry")
//       .should("have.value", "NotHarry");

//     emailInput()
//       .should("have.value", "")
//       .type("harry@harry.com")
//       .should("have.value", "harry@harry.com");
//   });