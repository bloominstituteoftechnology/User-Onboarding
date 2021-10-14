describe("Persons App", () => {
    beforeEach(() => {
        // eslint-disable-next-line no-undef
        cy.visit("http://localhost:3000");
    })
    // eslint-disable-next-line no-undef
    const nameInput= () => cy.get("input[name=username]");
    // eslint-disable-next-line no-undef
    const emailInput = () => cy.get("input[name=email]");
    // eslint-disable-next-line no-undef
    const passwordInput = () => cy.get("input[name=password]");
    // eslint-disable-next-line no-undef
    const submitBtn = () => cy.get("button[id=sb]");
    // eslint-disable-next-line no-undef
    const tos_check = () => cy.get("input[name=terms_of_service]");

    it("Proper elements showing", () =>{
        nameInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
        submitBtn().should("exist");
        tos_check().should("exist");
    })

    describe("Functionality tests", () => {
        it("Button starts disabled", () => {
            submitBtn().should("be.disabled");
            nameInput().should("have.value", "")
                .type("Vern");
            emailInput().should("have.value", "")
                .type("tbengtson82@gmail.com");
            passwordInput().should("have.value", "")
                .type("wolverine");
            tos_check().check();
            submitBtn().click();
        })
    describe("Check text in fields ", () => {
        it("Just checking", () => {
        nameInput().type("Vern");
        emailInput().type("tbengtson82@gmail.com");
        passwordInput().type("Vern82");
        nameInput().should("have.value", "Vern");
        emailInput().should("have.value", "tbengtson82@gmail.com");
        passwordInput().should("have.value", "Vern82");
            })
        it("Empty text fields", () =>{
            nameInput().type("Vern").clear();
            emailInput().type("Vern").clear();
            passwordInput().type("Vern").clear();
        })
        })
    })
})
















































