describe('user onboard app', ()=>{
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const userNameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const submitBtn = () => cy.get('#submit')
    const termsOfService = () => cy.get('input[name=termsOfService]')
    const roll = () => cy.get('select[name=roll]')
    
    it('sanity test', () => {
        expect(1 + 1).to.equal(2)
    })

    describe('form test', () => {
        it('submit btn is disabled when fields are empty', () => {
            // just kicking the tires.
            submitBtn().should('be.disabled')

        })

        it('Testing individual elements', () => {
            userNameInput()
              .should('have.value', '')
              .type('IndyDog')
              .should('have.value', 'IndyDog')
            emailInput()
              .should('have.value', '')
              .type('dogzilla@dogmail.com')
              .should('have.value', 'dogzilla@dogmail.com')
            passwordInput()
              .should('have.value', '')
              .type('dOgPaSsWoRd')
              .should('have.value', 'dOgPaSsWoRd')
            termsOfService()
              .click()
              .should('have.value', 'agree')
              .click()
            roll()
              .should('have.value', '')
              .select('Wizard')
              .should('have.value', 'wizard')
              .select('--Select a Roll--')
              .should('have.value', '')

        })

        it('Lets try to fill out the entire form and clicking the TOS button twice', () => {
            //fill in name then password and email
            //click TOS then select roll
            //click the TOS a second time
            //click the submit button to see if you can submit with the TOS unclicked
            cy.contains('IndyDog').should('not.exist')
            userNameInput().type('IndyDog')
            emailInput().type('dogzilla@dogmail.com')
            passwordInput().type('dOgPaSsWoRd')
            termsOfService().click()
              .should('have.value', 'agree')
            roll().select('Wizard')
            submitBtn().should('not.be.disabled')
            submitBtn().click()
            cy.contains('IndyDog').should('exist')
        })
        it('Lets try to fill out the form but no password', () => {

            cy.contains('IndyDog').should('not.exist')
            userNameInput().type('IndyDog')
            emailInput().type('dogzilla@dogmail.com')
            termsOfService().click()
            roll().select('Wizard')
            submitBtn().should('be.disabled')
            cy.contains('IndyDog').should('not.exist')
        })

        
    })

})