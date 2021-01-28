const textInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')

it("sanity test to make sure tests work", () => {
    // expect is an assertion
    // there can be many assertions per test
    // though inside the it statement (the test) usually
    // they are logically grouped together
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
  });

describe('index.html loads successfully', function () {
    it('Visits a new site', function() {
        cy.visit("index.html");
    })
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