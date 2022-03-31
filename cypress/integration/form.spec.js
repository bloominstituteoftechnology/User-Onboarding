// write tests here
describe('User Onboarding App', () => {
beforeEach(() => {
    cy.visit(`http://localhost:3000`);
})

//Sanity Check
it(`Sanity check to make sure I hooked this up correct`, () => {
    expect(1+2).to.equal(3);
})



})