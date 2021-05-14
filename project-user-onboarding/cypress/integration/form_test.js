

describe('NewForm', () => {
    beforeEach(() => cy.visit("http://localhost:3000"))
    describe('File and Submit', () => {
            it('render correctly', () => {

                cy.get('input[name=name]').type("Jeff Francois").should('have.value', "Jeff Francois")
                cy.get('input[name=email]').type("Jeff.Francois@outlook.com")
                
                cy.get('input[name=password]').type("789Jesus").click()
                cy.get('input:invalid').should('have.length', 0)
       

                cy.get('#password').then(($input) => {
                    expect($input[0].validationMessage).to.eq('this field is required')})
                    
                cy.get('[type="checkbox"]').check()
      
                cy.get('button').submit().click()
    
            
    })
    describe('Filling inputs and cancelling', () => {
        it('submit button disabled', () => {
           cy.get('button').submit().should('be.disabled')})
       })
    })
    
    })
