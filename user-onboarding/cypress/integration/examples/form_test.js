describe('form test', () => {
  it('test that the form is working properly', () => {
    cy.visit('/')

    cy.get('button#next')
    .should('be.disabled')

    const name = 'Noah Niesen'
    cy.get(':nth-child(1) > input')
    .type(name)
    .should('have.value', name)

    const email = 'niesen.noah@gmail.com';
    cy.get(':nth-child(2) > input')
    .type(email)
    .should('have.value', email)

    const phone = '1234567890'
    cy.get(':nth-child(3) > input')
    .type(phone)
    .should('have.value', phone)

    const username = 'noahn84'
    cy.get(':nth-child(4) > input')
    .type(username)
    .should('have.value', username)

    const password = 'testpassword'
    cy.get(':nth-child(5) > input')
    .type(password)
    .should('have.value', password)

    const position = 'Full-stack'
    cy.get('select#positions')
    .select(position)
    .should('have.value', position)

    cy.get('[data-cy="terms"]')
    .click()
    .should('not.be.disabled')

    cy.get('button#next')
    .should('not.be.disabled')
    .click()
  })
  it('error messages are being displayed properly', () => {
    cy.get(':nth-child(2) > input')
    .clear()

    cy.get(':nth-child(2) > .error')
    .contains('Please provide your email.')
  })

})