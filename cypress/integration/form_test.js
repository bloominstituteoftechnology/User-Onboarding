describe('Form inputs', () => {
    it('Navigates to App', () => {
        cy.visit('http://localhost:3000/')
        cy.url()
        .should('include', 'localhost')
    })

    

    it('Adds a Name', () => {
        cy.get('input[name="name"]')
            .type('Beggs')
            .should('have.value', "Beggs")
    })

    it('Adds a Password', () => {
        cy.get('input[name="password"]')
            .type('PASSWORD')
            .should('have.value', "PASSWORD")
    })

    it('Adds a Email', () => {
        cy.get('input[name="email"]')
            .type('karmaeiic.neuushi@gmail.com')
            .should('have.value', "karmaeiic.neuushi@gmail.com")
    })

    it('Checks Terms Box', () => {
        cy.get('input[name="terms"]')
            .click()
            // .should('Be checked')
    })
    it('Submits inputs', () => {
        cy.get('button.submit')
            .should('not.be.disabled')
    })
})

describe('wont submit with missing inputs', () => {
    it('wont submit when email is missing', () => {
        cy.visit('http://localhost:3000/')

        cy.get('input[name="name"]').type('Beggs')
        cy.get('input[name="password"]').type('PASSWORD')
        cy.get('input[name="terms"]').click()
        cy.get('button.submit').should('be.disabled')

    })
})

describe('Submit a user', () =>{
    it('can submit a user', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="name"]').type('Daniel Beggs')
        cy.get('input[name="email"]').type('daniel.micheal.beggs@gmail.com')
        cy.get('input[name="password"]').type('PASSWORD')
        cy.get('input[name="term"]').click()
        cy.get('button.submit').click()

    })
})