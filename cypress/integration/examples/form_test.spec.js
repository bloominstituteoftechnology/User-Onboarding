describe('User Creation Form', function() {
    it('Name Input Value', ()=> {
        cy.visit("http://localhost:3000/")
        cy.get('form input:first').type('some text')
        cy.get('form input:first').should('have.value', 'some text')
    })
    it('Email Input Value', ()=> {
        cy.visit("http://localhost:3000/")
        cy.get('form input:nth-of-type(2)').type('some text')
        cy.get('form input:nth-of-type(2)').should('have.value', 'some text')
    })
    it('Password Input Value', ()=> {
        cy.visit("http://localhost:3000/")
        cy.get('form input:nth-of-type(3)').type('some text')
        cy.get('form input:nth-of-type(3)').should('have.value', 'some text')
    })
    it('Terms Checked', () => {
        cy.visit("http://localhost:3000/")
        cy.get('form input:nth-of-type(4)').check()
        cy.get('form input:nth-of-type(4)').should('be.checked')
    })
    it('Check Submission Validation', () => {
        cy.visit("http://localhost:3000/")
        cy.contains('Submit').click()
        cy.get('p.formError').should('exist')
    })
})
describe('Created Users Display', () => {
    it('User Displays When Created', () => {
        cy.visit("http://localhost:3000/")
        cy.get('form input:first').type('Ashton')
        cy.get('form input:nth-of-type(2)').type('nunya@gmail.com')
        cy.get('form input:nth-of-type(3)').type('password')
        cy.get('form input:nth-of-type(4)').check()
        cy.contains('Submit').click()
        cy.contains('Ashton: nunya@gmail.com').should('exist')
    })
})