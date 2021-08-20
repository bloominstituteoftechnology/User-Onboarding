describe("Users App", () =>
{
    beforeEach(() => 
    {
        cy.visit("http://localhost:3000/");
    });

    const textInput = () => cy.get("input[name=text]");
    const first_name = () => cy.get("input[name=first_name]");
    const last_name = () => cy.get("input[name=last_name]");
    const email = () => cy.get("input[name=email]");
    const terms = () => cy.get("checkbox[name=terms]");

    it("Basic Check", () =>
    {
        expect(true).to.equal(true);
    });
});