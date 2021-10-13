
describe('Friends App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  
  const usernameInput = () => cy.get('input[name=username]')
  const emailInput = () => cy.get('input[name=email]')
  const passwordInput = () => cy.get('input[name=password]')
  const termsInput = () => cy.get('input[name=terms]')
  const submitBtn = () => cy.get('button[id="submitBtn"]')
   //I FOUND YOU FAKER!!!
  const Faker = () => cy.get('input[name=sonic]')

  it('checking my sanity', () => {
       expect(1+2).to.equal(3)
       expect(2+2).not.to.equal(5)
       expect({}).not.to.equal({})
       expect({}).to.eql({})
  })

  it('element time', () => {
    submitBtn().should('exist')
    usernameInput().should('exist')
    passwordInput().should('exist')
    Faker().should('not.exist')
    emailInput().should('exist')
    termsInput().should('exist')


    cy.contains('submit').should('exist')
  })

  describe("filling in the boxes", () => {
      it('Can do stuff on the site', () => {
           cy.url().should('include', 'localhost')
      })

      it('submit is diabled', () => {
        submitBtn().should('be.disabled')
      })
      
      it('Can type stuff', () => {
         usernameInput()
         .should('have.value', '')
         .type('Boris')
         .should('have.value', 'Boris')

         emailInput()
         .should('have.value', '')
         .type('vadimblyat@gopnikmail.russ')
         .should('have.value', 'vadimblyat@gopnikmail.russ')

         passwordInput()
         .should('have.value', '')
         .type('babushkaLovesYou')
         .should('have.value', 'babushkaLovesYou')
      })

      it('Can the yes on the terms of sevice', () => {
        termsInput().check('yes')
        cy.get(':checked').should('be.checked').and('have.value', 'yes')
        termsInput().check('no')
        cy.get(':checked').should('be.checked').and('have.value', 'no')
      })


      it('The submit reset the inputs and is diabled', () => {
         usernameInput().type('Boris')
         emailInput().type('vadimblyat@gopnikmail.russ')
         passwordInput().type('babushkaLovesYou')
         termsInput().check('yes')
         cy.get(':checked').should('be.checked').and('have.value', 'yes')
         submitBtn().click()
      })
  })

  describe('adding a new Friend', () => {
    it('Can submit Friend', () => {
      usernameInput().type('Boris')
      emailInput().type('vadimblyat@gopnikmail.russ')
      passwordInput().type('babushkaLovesYou')
      termsInput().check('yes')
      cy.get(':checked').should('be.checked').and('have.value', 'yes')
      submitBtn().click()
    })
  })

  describe('Error if left empty', () => {
    it('username Error', () => {
      usernameInput().type('L')
      emailInput().type('superdetec.g')
      passwordInput().type('werdfgvbn123456789)&*^#*@@@#$#%^&*()}{":?><><><youcanruuuunbutyoucan"thide')
      termsInput().check('no')
      cy.get(':checked').should('be.checked').and('have.value', 'no')
    })
  })
})

