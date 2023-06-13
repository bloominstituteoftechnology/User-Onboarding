describe("User-Onboarding App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    // GETTERS
    const nameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get("input[name=email]");
    const passwordInput = () => cy.get("input[name=password]")
    const tosButton = () => cy.get(`checkbox[name=tos]`);

    it("Checking if the test works", () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.equal(5);
    })
    it("Checking name input fuctionality", () => {
        nameInput().should("exist");
        nameInput().should("have.value", "").type("Jay").should("have.value", "Jay");
    })
    it("Checking email input functionality", () => {
        emailInput().should("exist");
        emailInput().should("have.value", "").type("jay@gmail.com").should("have.value", "jay@gmail.com")
    })
    it("Checking password input functionality", () => {
        passwordInput().should("exist");
        passwordInput().should("have.value", "").type("password").should("have.value", "password");
    })
    it("Checking terms of service checkbox functionality", () => {
    })

})