describe('User Onboarding Form', () => {
  beforeEach(()=> {
    cy.visit("http://localhost:3000")

  })

    // Handles
    const nameInput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const termsInput = () => cy.get('input[type="checkbox"]')
    const submit = () => cy.get('button')

  it('Sanity Check', () => {
    expect(2+2).to.equal(4)
  })

  it('check if user can check the terms checkbox', () => {
    termsInput().check()
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

    // no Name input
    emailInput()
      .type('Test@Test.com')
      .should('have.value','Test@Test.com')
    passwordInput()
      .type('Testpassword')
      .should('have.value','Testpassword')
    termsInput()
      .check()
      submit()
        .should('be.disabled')

    nameInput().clear()
    emailInput().clear()
    passwordInput().clear()
    termsInput().uncheck()
  
    // no email input
    nameInput()
      .type('Test Name')
      .should('have.value','Test Name')
    passwordInput()
      .type('Testpassword')
      .should('have.value','Testpassword')
    termsInput()
      .check()
      submit()
        .should('be.disabled')

    nameInput().clear()
    emailInput().clear()
    passwordInput().clear()
    termsInput().uncheck()

    // no password input 
    nameInput()
      .type('Test Name')
      .should('have.value','Test Name')
    emailInput()
      .type('Test@Test.com')
      .should('have.value','Test@Test.com')
    termsInput()
      .check()
      submit()
        .should('be.disabled')

    nameInput().clear()
    emailInput().clear()
    passwordInput().clear()
    termsInput().uncheck()

    // no checkbox input
    // works currently because checkbox isn't integrated into
    // the validation to disable submit button

    // nameInput()
    //   .type('Test Name')
    //   .should('have.value','Test Name')
    // emailInput()
    //   .type('Test@Test.com')
    //   .should('have.value','Test@Test.com')
    // passwordInput()
    //   .type('Testpassword')
    //   .should('have.value','Testpassword')
    //   submit()
    //     .should('be.disabled')

  })


})