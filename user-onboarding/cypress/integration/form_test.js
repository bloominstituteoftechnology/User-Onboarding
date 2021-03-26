describe('User-Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[name="username"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const tosInput = () => cy.get('input[name="tos"]')
    const submitButton = () => cy.get('button')
    const passwordError = () => cy.get('.pass')

    it('sanity test', () => {
        expect(1 + 2).to.equal(3)
    })

    it('name input test', () => {
      nameInput()
          .should('have.value', '')
          .type('Billybob')
          .should('have.value', 'Billybob')
    })

    it('email input test', () => {
      emailInput()
          .should('have.value', '')
          .type('billy@bob.com')
    })

    it('password input test', () => {
      passwordInput()
          .should('have.value', '')
          .type('secretcode')
    })

    it('tos input test', () => {
      tosInput().click()
          .should('have.value', 'true')
          
    })

    it('submit form test', () => {
        nameInput()
            .should('have.value', '')
            .type('Billybob')
            .should('have.value', 'Billybob')
        emailInput()
            .should('have.value', '')
            .type('billy@bob.com')
        passwordInput()
          .should('have.value', '')
          .type('secretcode')
        tosInput().click()
          .should('have.value', 'true')
        submitButton().click()
      })

    it('form validation test', () => {
        nameInput()
          .should('have.value', '')
          .type('Billybob')
          .should('have.value', 'Billybob')
        emailInput()
          .should('have.value', '')
          .type('billy@bob.com')
        passwordInput()
          .should('have.value', '')
          .type('secretcode')
          .clear()
          .should('have.value', '')
        passwordError()
          .should('exist')
        tosInput().click()
          .should('have.value', 'true')
      })
})