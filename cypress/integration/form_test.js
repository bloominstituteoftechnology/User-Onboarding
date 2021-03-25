describe("User app", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:3000 ")
    });

    it("sanity check", () => {
        expect(1 + 2).to.equal(3);
    })
})