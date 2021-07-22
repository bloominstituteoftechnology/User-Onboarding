describe('User Onboarding App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
    it('check for right elements showing', ()=>{
        textInput().should('exist')
        passwordInput().should('exist')
        emailInput().should('exist')

        //submitBtn().should('exist')
    })
})
const textInput = () => cy.get('input[name=first_name]')
const passwordInput = () => cy.get('input[name=password]')
const emailInput = () => cy.get('input[name=email]')

