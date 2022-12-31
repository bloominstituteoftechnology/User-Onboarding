describe('Quotes App', () => {
    beforeEach(() => {
      // Each test needs 'fresh state' !!
      // Tests should never rely on state left by previous tests !!
      // Every test must be able to work in isolation !!
      cy.visit('http://localhost:5500') // CAREFUL, SOME STUDENTS MIGHT BE ON A DIFFERENT PORT
    })
  
    // Helpers to centralize the CSS selectors and clean up the tests a bit.
    const textInput = () => cy.get('input[name=text]')
    const authorInput = () => cy.get('input[name=author]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosCkbx = () => cy.get(`radio[id="toscheckbx"]`)
    const cancelBtn = () => cy.get(`button[id="cancelBtn"]`)
  
    it('sanity check to make sure tests work', () => {
      // "it" is a test.
      // "expect" is an assertion.
      // There can be several assertions per test, but they all need to relate
      // to "the one thing" we're testing.
      expect(1 + 2).to.equal(3)
      expect(2 + 2).not.to.equal(5) // strict ===
      expect({}).not.to.equal({})   // strict ===
      expect({}).to.eql({})         // not strict
    })
  
    it('the proper elements are showing', () => {
      textInput().should('exist')
      emailInput().should('exist')
      passwordInput().should('exist')
      submitBtn().should('exist')
      cancelBtn().should('exist')
      // As usual, UI testing is easier if the HTML elements have unique identifiers on them.
      // This is selecting by text content, instead of by CSS selector:
      cy.contains('Submit Quote').should('exist')
      cy.contains(/submit quote/i).should('exist')
    })
  
    describe('Filling out the inputs and cancelling', () => {
      // We use optional "describe" blocks to organize and group our tests.
      it('can navigate to the site', () => {
        cy.url().should('include', 'localhost')
      })
  
      it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled')
      })
  
      it('can type in the inputs', () => {
        textInput()
          .should('have.value', '')
          .type('Be nice to the CSS expert')
          .should('have.value', 'Be nice to the CSS expert')
  
        emailInput()
          .should('have.value', '')
          .type('Gabe!')
          .should('have.value', 'Gabe!')
        passwordInput()
            .should('have,value', '')
            .type('')
            .should('have.value', 'Be 8 characters')
      })
  
      it('the submit button enables when both inputs are filled out', () => {
        authorInput().type('Gabe')
        emailInput().type('Have fun!')
        passwordInput().type('must be entered')
        submitBtn().should('not.be.disabled')
      })
  
      it('the cancel button can reset the inputs and disable the submit button', () => {
        emailInput().type('Gabe')
        textInput().type('Have fun!')
        passwordInput().type('must be 8 charc')
        cancelBtn().click()
        textInput().should('have.value', '')
        emailInput().should('have.value', '')
        submitBtn().should('be.disabled')
      })
    })
  
    describe('Adding a new quote', () => {
      it('can submit and delete a new quote', () => {
        textInput().type('Have fun!')
        emailInput().type('Gabe')
        submitBtn().click()
        // It's important that state be the same at the beginning of each test
        // which is why we delete the newly created post immediately.
        // If we are not careful with this, we'll get lots of false positives and negatives.
        // Restart the server script if necessary to go back to the original 3 quotes.
        // Explain that in real world, a fresh testing database with predetermined data would be spun up for each test run.
        cy.contains('Have fun!').siblings('button:nth-of-type(2)').click()
        cy.contains('Have fun!').should('not.exist')
      })
  
      it('variation of can submit a new quote', () => {
        cy.contains(/have fun/).should('not.exist')
        textInput().type('have fun')
        emailInput().type('Gabe')
        submitBtn().click()
        cy.contains(/have fun/).should('exist')
        cy.contains(/have fun/).next().next().click()
        cy.contains(/have fun/).should('not.exist')
      })
    })
  
    describe('Editing an existing quote', () => {
      it('can edit a quote', () => {
        // Baking a new quote and submitting it.
        textInput().type('Use Postman')
        authorInput().type('Gabriel')
        submitBtn().click()
        // Hitting the edit button and checking inputs.
        cy.contains('Use Postman').siblings('button:nth-of-type(1)').click()
        textInput().should('have.value', 'Use Postman')
        authorInput().should('have.value', 'Gabriel')
        // Editing the quote and submitting changes.
        textInput().type(' for realz')
        authorInput().type(' Cabrejas')
        submitBtn().click()
        // Checking that the changes stuck.
        cy.contains('Use Postman for realz (Gabriel Cabrejas)')
        // Hitting the delete button for the edited quote to leave state the way it was. IMPORTANT !!
        cy.contains('Use Postman for realz (Gabriel Cabrejas)').next().next().click()
        cy.contains('Use Postman for realz (Gabriel Cabrejas)').should('not.exist')
      })
    })
  })