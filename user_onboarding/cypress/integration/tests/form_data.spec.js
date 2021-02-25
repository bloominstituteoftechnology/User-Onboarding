describe('User Onboarding App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  const form = () => cy.get('.form')
  const errors = () => cy.get('.errors')
  const form_group = () => cy.get('.form-group')
  const userName = () => cy.get('input[name=username]')
  const email = () => cy.get('input[name=email]')
  const password = () => cy.get('input[name=password]')
  const terms = () => cy.get('input[name=tos]')
  const button = () => cy.get('button')
  

  it('form check', () => {
    form().should('exist')
    errors().should('exist')
    form_group().should('exist')
    userName().should('exist')
    email().should('exist')
    password().should('exist')
    terms().should('exist')
    button().should('exist')
  })













})