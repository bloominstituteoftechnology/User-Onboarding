const { iteratee, before } = require("lodash")



describe('Form tester', function (){
    beforeEach(()=>{
        cy.visit('http://localhost:3000/')
    })
    it('should grab the name element', () => {
        const username = cy.get('input[name="username"]')
        username.type('michael')
        username.should('have.value', 'michael')
    })
    it('should grab and input the email and password', ()=> {
        const email = cy.get('input[name="email"]')
        email.type('matillman95@gmail.com')
        email.should('have.value', 'matillman95@gmail.com')
        const password = cy.get('input[name="password"')
        password.type('itachi uchiha')
        password.should('have.value', 'itachi uchiha')
    })

    it('should check to see if the TOS box and submit button works', ()=> {

        const tos = cy.get('input[type="checkbox"')
        tos.should('exist')
        const submitbtn = cy.get('.submitbtn')
        submitbtn.should('exist')
    })
        
})