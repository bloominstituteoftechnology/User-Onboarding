// - [ ]  Get the `Name` input and type a name in it.
// - [ ]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [ ]  Get the `Email` input and type an email address in it
// - [ ] Get the `password` input and type a password in it
// - [ ]  Set up a test that will check to see if a user can check the terms of service box
// - [ ] Check to see if a user can submit the form data
// - [ ] Check for form validation if an input is left empty



describe('Quotes App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name=first_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitButton = () => cy.get('button[id=submit')
    const tos = () => cy.get('input[name=tos]')

    it('Elements present', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitButton().should('exist')
    })

    it('submit button starts disabled', () => {
        submitButton().should('be.disabled');
      })
    
      it('type inputs', () => {
        nameInput()
          .should('have.value', '')
          .type('Gerry Generic')
          .should('have.value', 'Gerry Generic')
  
        emailInput()
          .should('have.value', '')
          .type('bob@bob.com')
          .should('have.value', 'bob@bob.com')
      
        passwordInput()
          .should('have.value', '')
          .type('password')
          .should('have.value', 'password')

        tos()
            .check()
        })
    it('invalid inputs', () => {
        emailInput().type('invalid email')
        cy.contains('Valid email address required')
        passwordInput().type('a')
        cy.contains('Password must be at least 6 chars long')
        submitButton().should('be.disabled')
    })
    it('incomplete inputs', () => {
        nameInput().type('Gerry Generic')
        emailInput().type('bob@bob.com')
        submitButton().should('be.disabled')
    })
    it('Submission', () => {
        nameInput().type('Gerry Generic')
        emailInput().type('bob@bob.com')  
        passwordInput().type('password')
        tos().check()
        submitButton().click()
        cy.contains('Gerry Generic')
        cy.contains('bob@bob.com')
    })
})
'Valid email address required'