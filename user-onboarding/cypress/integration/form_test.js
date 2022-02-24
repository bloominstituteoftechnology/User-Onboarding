

// ! Tests normally follow three phases: 
/**
 * 1. Arrange: set up your form/web page
 * - set initial states / query for an elem
 * 2. Act: simulate user in'x
 * - take an action
 * 3. Assert: verify that simulations actually work (tests!)
 * - make your assertions
 */


// ! 1. Start first test test: 
// - use describe: groups related tests together, keeps things organized

// describe("testing testing 1,2, .. hello?", () => {
//     //*within the describe the ACTUAL first test is run with "IT"
//     it("is this thing on?", () => {
//         // the first line in the fn of the IT test is the "assertion" aka your expectations of your test. If the expectation isn't met, it is failing you and you need to repair that relationship or ditch it altogether 
//         expect(true).to.equal(false)
//         // expect("kim").to.not.equal("holding it together :)")
//     })
// })

// ! Let's do our first relevant test:

describe (" IDK WHAT IM DOING (｢๑•₃•)｢ " , () => {
    // 1. Arrange
    it("...hello?", () => {
        cy.visit("http://localhost:3000/")
    } )
} )
