// describe block "describes" our collection of tests
describe('User Onboarding App', () => {
    beforeEach(() => {
      // console.log(`random int: ${Math.random()}`)
      cy.visit('/')
    }) // connect to cypress with cy.visit
    // tests for the test itself
    it('sanity check', () => {
      // expect is an assertion, can have many assertions in a test
      expect(1 + 2).to.equal(3)
      expect(1 + 2).not.to.equal(4)
    }) // test check 1
    it('sanity check 2', () => {
      expect([1,2,3,4,5].length).to.equal(5)
    })  // test check 2
    // element variables
    const nameInput = () => cy.get('[name="name"]')
    const emailInput = () => cy.get('[name="email"]')
    const passwordInput = () => cy.get('[name="password"]')
    const roleSelect = () => cy.get('[name="role"]')
    const acceptTermsCheckbox = () => cy.get('[name="acceptTerms"]')
    const submitButton = () => cy.get('#submitBtn')
    //write a test that inputs are there
    it('input fields are rendering', () => {
      nameInput().should('exist')
      emailInput().should('exist')
      passwordInput().should('exist')
    })
    it('checkbox is rendering', () => {
      roleSelect().should('exist')
    })
    it('checkbox is rendering', () => {
      acceptTermsCheckbox().should('exist')
    })
    it('button is rendering', () => {
      submitButton().should('exist')
    })
    //write a test for making sure that we can add a new user
    it('make sure we can add a new user', () => {
      const testName = "Wrenley"
      const testEmail = "wrenley@gmail.com"
      const testPassword = "Emmi"
      nameInput().type(testName)
      emailInput().type(testEmail)
      passwordInput().type(testPassword)
      roleSelect().select('note-taker')
      acceptTermsCheckbox().check()
      submitButton().click()
    })
  });