describe("User app", () => {
    beforeEach(() =>{
        cy.visit("http://localhost:3000 ")
    });

    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const serviceInput = () => cy.get('input[type="checkbox"]');
    const submitBtn = () => cy.get("#submitBtn");
    const error = () => cy.get('[name="errors"]');

    it("sanity check", () => {
        expect(1 + 2).to.equal(3);
    })

    it("get name and put something in it", () => {
        nameInput()
        .should("have.value", "")
        .type("Zachary Cooremans")
        .should('have.value', "Zachary Cooremans")
    });

    it("get email and add one", () => {
        emailInput()
        .should("have.value", "")
        .type("Z@z.com")
        .should("have.value", 'Z@z.com')
    });

    it("get password and add one", () => {
        passwordInput()
        .should("have.value", "")
        .type('Abc123')
        .should("have.value", "Abc123")
    });

    it("check if validation is checked", () => {
        serviceInput()
        .check()
    })

    it("check if can submit form data", () => {
        nameInput().should("have.value", "");
        emailInput().should('have.value', "");
        passwordInput().should('have.value', "");
        submitBtn().should('be.disabled');

        nameInput()
        .type("Zachary Cooremans")
        .should("have.value", "Zachary Cooremans");
        submitBtn().should('be.disabled');

        emailInput()
        .type("Z@z.com")
        .should("have.value", "Z@z.com");
        submitBtn().should('be.disabled');

        passwordInput()
        .type("Abc123")
        .should("have.value", "Abc123");
        submitBtn().should('be.disabled');

        serviceInput()
        .check();
        submitBtn().should("not.be.disabled")

        submitBtn()
        .click()
        .pause()

    });

     it("check if submition will go with mission data", () => {
        nameInput()
        .type('Zach')
        .should("have.value", "Zach")
        .clear()

        emailInput()
        .type("Z@z.com")
        .should('have.value', "Z@z.com")
        .clear();

        passwordInput()
        .type("Abc123")
        .should('have.value', "Abc123")
        .clear();

        serviceInput()
        .check()
        .uncheck()
     })
})