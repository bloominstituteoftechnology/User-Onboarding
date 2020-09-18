// write tests here
describe('Form app', () => {
    beforeEach(() => {
      // arbitrary code you want running
      // before each test
      cy.visit('http://localhost:1234')
    })

    const textInput = () => cy.get('input[name=text]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=Terms of Service]')

    it('sanity check to make sure tests work', () => {
        // "expect" is an assertion
        // there can be several assertions per test
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5) // strict ===
        expect({}).not.to.equal({})   // strict ===
        expect({}).to.eql({})         // not strict
      })

      it('the correct elements are showing', () => {
        textInput().should('exist')
        emailInput().should('not.exist')
        passwordInput().should('exist')
        termsInput().should('exist')
        
    
        cy.contains('Submit Quote').should('exist')
        cy.contains(/submit quote/i).should('exist')
      })
    
      it('can type in the inputs', () => {
        textInput()
          .should('have.value', '')
          .type('Simone')
          .should('have.value', 'Simone')
    
        emailInput()
          .should("have.value", "")
          .type("simone.a.ballard@gmail.com")
          .should('have.value', 'simone.a.ballard@gmail.com')
      })
    
      it('submit button disabled until both inputs are filled out', () => {
       //form validation if an input is left empty**
    
        submitBtn().should('be.disabled')
        textInput().type('TEXT INPUT')
        submitBtn().should('be.disabled')
        textInput().clear()
        emailInput().type('EMAIL INPUT')
        submitBtn().should('be.disabled')
        textInput().type('TEXT INPUT')
        submitBtn().should('not.be.disabled')
      })
    
      it("cancel inputs", () => {
        // should('have.value' '') --> to assert that an input is empty
        // click()                 --> to click on an element
        textInput().type("TEXT INPUT")
        emailInput().type("EMAIL INPUT")
        cancelBtn().click()
        emailInput().should("have.value", "")
        textInput().should("have.value", "")
      })
      
      it('can submit a new quote', () => {
        // make a new quote
        // delete it
        // assert it was successfuly deleted
    
        cy.contains(/have fun/).should('not.exist')
        textInput().type('have fun')
        emailInput().type('simone.a.ballard@gmail.com')
        submitBtn().click()
        cy.contains(/have fun/).should('exist')
        cy.contains(/have fun/).next().next().click()
        cy.contains(/have fun/).should('not.exist')
      })
    })