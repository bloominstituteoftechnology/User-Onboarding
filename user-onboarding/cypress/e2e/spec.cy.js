


describe('form', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it('make sure first name input has a string', function () {
        cy.get('input[name="first_name"]')
        .type('FirstName')
        .should('have.value', 'FirstName')
    })

    it('makes sure last name input has a string', () => {
        cy.get('input[name="last_name"]')
        .type('LastName')
        .should('have.value', 'LastName')
    })

    it('can type an email address into an input field', () => {
        cy.get('input[type="email"]')
        .type('foo@bar.com')
        .should('have.value', 'foo@bar.com')
    })

    it('types a password', () => {
        cy.get('input[type="password"]')
        .type('password')
        .should('have.value', 'password')
    })

    it('checks the checkbox', () => {
        cy.get('input[type="checkbox"]')
        .check()
        .should('have.value', 'on')
    })

    it('picks a choice in dropwdown', ()=>{
        cy.get('select')
        .select('Cop')
        .should('have.value', 'Cop')
    })

    it('submits the form', () => {
        cy.get('form')
        .submit()
    })


})


