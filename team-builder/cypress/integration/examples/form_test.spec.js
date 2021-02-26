beforeEach(() => {
        
    cy.visit('http://localhost:3000')
})

describe('Quotes app', () => {
    
    const nameInput = () => cy.get('input[name=first_name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const formSubmitInput = () => cy.get('button[id=submitBtn]')
    const termOfService = () => cy.get('[type="checkbox"]')
    
    it('sanity check to make sure our tests work', () => {
        expect(1 + 1).to.equal(2)
        expect(1 + 1).not.to.equal(3)
        expect(7).to.equal(7)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it( 'the proper elements are showing', () => {
       formSubmitInput().should('exist')
       nameInput().should('exist')
       emailInput().should('exist')
       passwordInput().should('exist')
    })

    describe('Filling out the inputs',() => {
        it('submit button is disabled' , () => {
            formSubmitInput().should('be.disabled')
        })
        it('can type in inputs',() => {
            nameInput()
            .should('have.value','')
            .type('name')
            .should('have.value','name')

            emailInput()
            .should('have.value','')
            .type('name@email.com')
            .should('have.value','name@email.com')

            passwordInput()
            .should('have.value','')
            .type('name1234')
            .should('have.value','name1234')

            termOfService()
            .should('not.be.checked')
            .click()
            .should('be.checked')

            formSubmitInput().should('not.be.disabled')
            formSubmitInput().click()
        })
    })
})
 
