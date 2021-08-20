describe('User Forms App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001')
  })

  const nameInput = () => cy.get('input[name=name]')
  const emailInput = () => cy.get('input[name=email')
  const passwordInput = () => cy.get('input[name=password')

  it('fields can accept text', () => {
    nameInput()
      .should('have.value', '')
      .type('Do you see me?')
      .should('have.value', 'Do you see me?')

      emailInput()
      .should('have.value', '')
      .type('Now you see me?')
      .should('have.value', 'Now you see me?')

      passwordInput()
      .should('have.value', '')
      .type('Did you ever see me?')
      .should('have.value', 'Did you ever see me?')
  })
})
