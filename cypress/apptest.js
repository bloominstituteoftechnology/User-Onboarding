describe('Sanity Test', () => {
    cy.visit("http://localhost:3000");

    it("evaluates to true", () => {
        expect(true).to.equal(true);
    })
});