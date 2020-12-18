describe("Quotes app", () => {
    beforeEach(() => {
        cy.visit("https://localhost:1234")
    });
    it("sanity test", () => {
        expect(1 + 2).to.equal(3)
    })
})