describe('Is username able to be ericgant1996', function() {
    it('Types username and checks for match', function() {
        cy.visit('.../public/index.html')
        cy.get('input[name="username"]')
        .type('ericgant1996')
        .should('have.value', 'ericgant1996')
    })
})

describe('Can type an email', function(){
    it('Types an email', function(){
        cy.visit('.../public/index.html')
        cy.get('input[name="email"]')
        .type('fakeemail@gmail.com')
    })
})

describe('Can type a password', function(){
    it('Types a password', function(){
        cy.visit('.../public/index.html')
        cy.get('input[name="password"]')
        .type('fakepassword123')
    })
})

describe('Can check the terms of service', function(){
    it('Clicks the checkbox', function(){
        cy.visit('.../public/index.html')
        cy.get('input[type="checkbox"]')
        .check()
    })
})

describe('Can submit data', function(){
    it('Clicks submit', function(){
        cy.visit('.../public/index.html')

        cy.get('input[name="username"]')
        .type('ericgant1996')

        cy.get('input[name="email"]')
        .type('fakeemail@gmail.com')

        cy.get('input[name="password"]')
        .type('fakepassword123')

        cy.get('input[type="checkbox"]')
        .check()

        cy.get('button')
        .click()
})
})

describe('Is form invalid', function(){
    it('Cannot submit form, button is disabled', function(){
        cy.visit('.../public/index.html')

        cy.get('input[name="username"]')
        .should('have.value', '')
        
        cy.get('input[name="email"]')
        .should('have.value', '')

        cy.get('input[name="password"]')
        .should('have.value', '')
})
})