describe('User Onboarding Form', () => {
  beforeEach(()=> {
    cy.visit("http://localhost:3000")

  })

    // Handles
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsInput = () => cy.get('input[name="terms"]')
    const submit = () => cy.get('button')

  it('Sanity Check', () => {
    expect(2+2).to.equal(4)
  })

  it('check if user can click terms checkbox', () => {
    termsInput().click()
  })

  it('check if user can submit the form', () => {

    nameInput()
      .type('Test Name')
      .should('have.value','Test Name')
    emailInput()
      .type('Test@Test.com')
      .should('have.value','Test@Test.com')
    passwordInput()
      .type('Testpassword')
      .should('have.value','Testpassword')
    termsInput()
      .click()
      submit()
        .click()
  })

  it('Check if user can submit form without completing all fields', () => {

    emailInput()
      .type('Test@Test.com')
      .should('have.value','Test@Test.com')
    passwordInput()
      .type('Testpassword')
      .should('have.value','Testpassword')
    termsInput()
      .click()
      submit()
        .should('be.disabled')

    nameInput().clear()
    emailInput().clear()
    passwordInput().clear()
      

    nameInput()
      .type('Test Name')
      .should('have.value','Test Name')
    passwordInput()
      .type('Testpassword')
      .should('have.value','Testpassword')
    termsInput()
      .click()
      submit()
        .should('be.disabled')

    nameInput().clear()
    emailInput().clear()
    passwordInput().clear()

    nameInput()
      .type('Test Name')
      .should('have.value','Test Name')
    emailInput()
      .type('Test@Test.com')
      .should('have.value','Test@Test.com')
    termsInput()
      .click()
      submit()
        .should('be.disabled')


  })


})