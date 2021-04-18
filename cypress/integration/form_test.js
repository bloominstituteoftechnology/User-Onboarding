describe('this is the first test!', () =>{
    it( "Should return true", () =>{
        expect(true).to.equal(true);
    })

    describe("User Onboarding Form Should Work", () =>{
        beforeEach(function () {
            cy.visit("http://localhost:3000");
        })
    it('Visits the URL', () => {}) 

        })

        const textInput = () => cy.get('input[name="name"]');
        const emailInput = () => cy.get('input[name="email"]')
        const passwordInput = () => cy.get('input[name=password]')
        const termofServiceClick = () => cy.get("input[name='terms']")

    it('has the proper elements', () => {

            textInput().should('exist')
              emailInput().should('exist')
            passwordInput().should('exist')
           termofServiceClick().should('exist')

    });
    describe('filling out inputs and cancelling', () => {
        it('can type inside the text input', () => {
            textInput()
            .should('have.value', '')
            .type('Vida')
            .should('have.value', 'Vida')
        })
        it('can type inside the Email input', () => {
            emailInput()
            .should('have.value', '')
            .type('ofo28@aol.com')
            .should('have.value', 'ofo28@aol.com')
        })

        it('can type inside the author input', () => {
            passwordInput()
            .should('have.value', '')
            .type('211web27!')
            .should('have.value', '211web27! ')
        })

        it("the cancel button can rest the inputs and disable the submit button", () => {
            
            termofServiceClick().click();
            passwordInput().should("have.value", "");
            textInput().should("have.value", "");
            emailInput().should("have.value", "");
          });
})

})