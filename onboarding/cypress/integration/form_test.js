describe('Onboarding App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
      });
    
    
    it("sanity check", () => {
        //assertion(s)
        expect(5).to.equal(5);
        expect(1 + 2).to.equal(3);
    
        expect({}).to.not.equal({}); // can use "equal" here// and not strict i.e. (==)
        expect({}).to.eql({}); //can't use equal here// and deeply strick i.e. (===)
      });
});
