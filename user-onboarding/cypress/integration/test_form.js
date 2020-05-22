describe('My Test', () => {
    it('finds the content "type"', () => {
      cy.visit('http://localhost:3000/')
  
      cy.contains('type').click()
    })
  })
  describe('Test inputs in form', () => {
    it('finds the content "type"', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('input[name="name"]').type("julian")
      cy.get('input[name="email"]').type("juliancole995@gmail.com")
      cy.get('input[name="password"]').type("julian")
      
    })
  })
  describe('Test checkbox terms & condition', () => {
    it('finds the content "type"', () => {
      cy.visit('http://localhost:3000/')
      cy.get('input[name="terms"]').type("checkbox")
  
    })
  })
     
     
     
  describe('Test submit button on form', () => {
    it('finds the content "type"', () => {
      cy.visit('http://localhost:3000/')
      cy.get('input[name="name"]').type("text")
  
    })
  })