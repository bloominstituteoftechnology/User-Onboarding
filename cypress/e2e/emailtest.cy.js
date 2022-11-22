describe('it checks for an email input', function (){
  it('can type an email address into an input'), function () {
    cy.visit('')
    cy.contains('type').click()
    cy.get('.action-email')
    .type('fake@gmail.com')
    .should('have.value', 'fake@gmail.com')
  }
})