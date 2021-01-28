describe("forms", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it("get the name, type it in", () => {
        cy.get('input[name="name"]').should("have.value", "")
        .type('Courtney')
        .should("have.value", "Courtney")
    });
    it("can get email and type email address", () => {
        cy.get('input[name="email"]').should("have.value", "")
        .type('am10ac17@gmail.com')
        .should("have.value", "am10ac17@gmail.com")
    });
    it("can get password and type it in", () => {
        cy.get('input[name="password"]').should("have.value", "")
        .type('cooper')
        .should("have.value", "cooper")
    });
    it("check if user can check and un-check the terms box", () => {
        cy.get('input[name="terms"]').check()
        cy.get('input[name="terms"]').uncheck()
    });
    it("check is user can submit form data", () => {
        cy.get('button').should("be.disabled")
        cy.get('input[name="name"]').type('have valid name')
        //cy.get('button').should("be.disabled")
        cy.get('input[name="email"]').type('something@kk.com')
        //cy.get('button').should("be.disabled")
        cy.get('input[name="password"]').type('have valid password')
        //cy.get('button').should("be.disabled")
        cy.get('input[name="terms"]').check()
        cy.get('button').should("be.enabled").click()
    })
    it("check for form validation if input is left empty", () => {
        cy.get('button').should("be.disabled")
        cy.get('input[name="name"]').type('have valid name')
        // cy.get('input[name="email"]').type('')
        cy.get('input[name="password"]').type('have valid password')
        cy.get('input[name="terms"]').check()
        cy.get('button').should("be.disabled")
    })
   
})