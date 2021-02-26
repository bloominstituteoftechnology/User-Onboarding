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
  const submitButton = () => cy.get('button')
  

  it('form check', () => {
    form().should('exist')
    errors().should('exist')
    form_group().should('exist')
    userName().should('exist')
    email().should('exist')
    password().should('exist')
    terms().should('exist')
    submitButton().should('exist')
  })

describe('Filling out the inputs', () => {
  it('Check if submit button is disabled', () => {
    userName().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
    email().should('have.value', '')
    .type('Hello, World!')
    .should('have.value', 'Hello, World!')
    password().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
    terms().check(terms)
    submitButton().should('be.disabled')
  })

  it('Are input fields editable', () => {
    userName().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
    email().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
    password().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
  })

  it('Check and Uncheck TOS checkbox', ()=> {
    terms().check(terms)
    terms().uncheck(terms)
  })
  it('Are validations met to enable submit button?', () => {
    userName().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
    email().should('have.value', '')
    .type('tarah.agbokhana@gmail.com')
    .should('have.value', 'tarah.agbokhana@gmail.com')
    password().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
    terms().check(terms)
    submitButton().click(submitButton)
  })
  it('Valiate email field', () => {
    email().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
  })
  it('Password field is empty check', () => {
    userName().should('have.value', '')
    .type("Hello, World!")
    .should('have.value', 'Hello, World!')
    email().should('have.value', '')
    .type('tarah.agbokhana@gmail.com')
    .should('have.value', 'tarah.agbokhana@gmail.com')
    password().should('not.have.value')
  })
})











})