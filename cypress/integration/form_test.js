describe('Form inputs', () => {
    it('Navigates to App', () => {
        cy.visit('http://localhost:3000/')
        cy.url()
        .should('include', 'localhost')
    })

    it('Adds a First Name', () => {
        cy.get('input[name="first_name"]')
            .type('Noah')
            .should('have.value', 'Noah')
    })

    it('Adds a Last Name', () => {
        cy.get('input[name="last_name"]')
            .type('Bibb')
            .should('have.value', "Bibb")
    })

    it('Adds a Password', () => {
        cy.get('input[name="password"]')
            .type('PASSWORD')
            .should('have.value', "PASSWORD")
    })

    it('Adds a Email', () => {
        cy.get('input[name="email"]')
            .type('noahbibb90@gmail.com')
            .should('have.value', "noahbibb90@gmail.com")
    })

    it('Checks Terms Box', () => {
        cy.get('input[name="termsOfService"]')
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
        cy.get('input[name="first_name"]').type('Derrick')
        cy.get('input[name="last_name"]').type('Monnett')
        cy.get('input[name="password"]').type('PASSWORD')
        cy.get('input[name="termsOfService"]').click()
        cy.get('button.submit').should('be.disabled')

    })
})

describe('Submit a user', () =>{
    it('can submit a user', () => {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="first_name"]').type('Derrick')
        cy.get('input[name="last_name"]').type('Monnett')
        cy.get('input[name="email"]').type('DeMon@gmail.com')
        cy.get('input[name="password"]').type('PASSWORD')
        cy.get('input[name="termsOfService"]').click()
        cy.get('button.submit').click()

    })
})