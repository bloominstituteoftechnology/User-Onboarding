describe('Name Form', function() {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it('Gets the name input and types in a name', function() {
        cy.get('[name="name"]')
        .type('Gabe')
        .should('have.value', 'Gabe')
    })
});

describe('Email Form', function() {
    it('Gets the email input and types in an email', function() {
        cy.get('[name="email"]')
        .type('g.chilson34@gmail.com')
        .should('have.value', 'g.chilson34@gmail.com')
    })
});

describe('Password Form', function() {
    it('Gets the password input and types in a password', function() {
        cy.get('[name="password"]')
        .type('Password123')
        .should('have.value', 'Password123')
    })
});

describe('Terms Input', function() {
    it('clicks the Terms button and confirms it works', function() {
        cy.get('[name=terms]').click()
    })
});

describe('Submit Button', function() {
    it('clicks the submit button and confirms it works', function() {
        cy.get('[name=submit]').click()
    })
});

