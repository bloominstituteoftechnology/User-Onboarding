describe('User App', () => {
    beforeEach(() => {
    cy.visit('http://localhost:3000')
    
    })


const nameInput = () => cy.get('input[name="name"]')
const emailInput = () => cy.get('input[name="email"]')
const passwordInput = () => cy.get('input[name="password"]')
const termsBox = () => cy.get('input[name="terms"]')
const submitBtn = () => cy.get('button[id=submitBtn]')


it('sanity checks', () => {
    // assertion(s)
    expect(5).to.equal(5)
    expect(1 + 2).to.equal(3)
    expect({}).to.eql({})
    expect({}).to.not.equal({})
  })

  it('the proper elements exist', () => {
    // sanity checking that the elements that should exist are there
    nameInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
    submitBtn().should('exist')
  })

  describe('Filling out inputs and checking info', () => {
    it('can type inside the inputs', () => {
        nameInput()
            .type('MegB')
            .should('have.value', 'MegB')

        emailInput()
            .type('meg@meg.com')
            .should('have.value', 'meg@meg.com')
        
        passwordInput()
            .type('password')
            .should('have.value', 'password')

        termsBox()
            .check()
            .should('be.checked')
    })

    it('User can submit the form data', () => {
        cy.contains(/MegB/).should('not.exist')
        nameInput().type('MegB')
        emailInput().type('m@m.com')
        passwordInput().type('password')
        submitBtn().click()
        cy.contains(/MegB/).should('exist')
    })

    it('Submit button enables with form validation', () => {
        submitBtn().should('be.disabled')
        nameInput().type('MegB')
        emailInput().type('m@m.com')
        passwordInput().type('password')
        submitBtn().should('not.be.disabled')
    })
  })//End of Filling out Describe box


}) //End of Describe box