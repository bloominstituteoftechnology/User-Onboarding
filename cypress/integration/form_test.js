describe('Launch Website', function () {
    it('Goes to the website', function () {
        cy.visit('http://localhost:3000/')

    })
})

describe('Name Check', function () {
    it('Checks the name input field', function () {

        cy.get('[name=name]')
            .type('Mykael')
            .should('have.value', 'Mykael')
    })
})

describe('Email Check', function () {
    it('Checks the email input field', function () {
        cy.get('[name=email]')
            .type('Mykael@email.com')
            .should('have.value', 'Mykael@email.com')

    })
})

describe('Password Check', function () {
    it('Checks the password input field', function () {
        cy.get('[name=password]')
            .type('password123')
            .should('have.value', 'password123')

    })
})

describe('TOS check', function () {
    it('Checks the Terms of Service checkbox input field', function () {
        cy.get('[type="checkbox"]').check().should('be.checked')

    })
})

describe('Submit Check', function () {
    it('Checks to see if the user can submit', function () {
        cy.contains('Submit').click()

    })
})