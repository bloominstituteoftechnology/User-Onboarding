


describe('form', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    const firstName = () => cy.get('input[name="first_name"]')
    const lastName = () => cy.get('input[name="last_name"]')
    const email = () =>  cy.get('input[type="email"]')
    const password = () => cy.get('input[type="password"]')
    const checkbox = () => cy.get('input[type="checkbox"]')
    const select = () => cy.get('select')
    const button = () => cy.get('button')
    it('make sure first name input has a string', function () {
        firstName()
        .type('FirstName')
        .should('have.value', 'FirstName')
    })

    it('makes sure last name input has a string', () => {
        lastName()
        .type('LastName')
        .should('have.value', 'LastName')
    })

    it('can type an email address into an input field', () => {
        email()
        .type('foo@bar.com')
        .should('have.value', 'foo@bar.com')
    })

    it('types a password', () => {
        password()
        .type('password')
        .should('have.value', 'password')
    })

        it('checks the checkbox', () => {
            checkbox()
            .check()
            .should('have.value', 'on')
        })

    it('picks a choice in dropwdown', ()=>{
        select()
        .select('Cop')
        .should('have.value', 'cop')
    })

    it('submits form', () => {
        firstName()
        .type('FirstName')
        .should('have.value', 'FirstName')

        lastName()
        .type('LastName')
        .should('have.value', 'LastName')

        email()
        .type('foo@bar.com')
        .should('have.value', 'foo@bar.com')

        password()
        .type('password')
        .should('have.value', 'password')

        checkbox()
            .check()
            .should('have.value', 'on')

        select()
            .select('Cop')
            .should('have.value', 'cop')

            button().click()
    })

    it('checks if input is left open', () => {
        cy.get('form > :nth-child(1)')
        .should('have.class', 'red' )
    })

    it('also checks if inputs are emtpy', () => {
        button().should('be.disabled')
    })




})


