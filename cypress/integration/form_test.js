/// <reference types="cypress" />

describe('check the inputs', () => {
    it('can navigate to the site', () => {
        // this is setup for the actual test
        cy.visit('http://localhost:3000/')
        // assert that the site we landed at is the correct one
      })

    it('can type a text for a new name', () => {
        cy.get('input[name="username"]')
          .type('John Adams')
          .should('have.value','John Adams')
      })
      
    it('can type a text for a new email', () => {
        cy.get('input[name="email"]')
          .type('liberty@1776.com')
          .should('have.value','liberty@1776.com')
      })
      
    it('can type a text for a new password', () => {
        cy.get('input[name="password"]')
          .type('liveFreeOrDie')
          .should('have.value','liveFreeOrDie')
      })

    it('can click on the terms of service button', () => {
        cy.get('input[name="termsOfService"]').click()
    })

    it('can click on the age agreement', () => {
        cy.get('input[name="ofAge"]').click()
    })

    it('can click on the us citizenship confirmation', () => {
        cy.get('input[name="usCitizen"]').click()
    })
})

describe('submit a form', () => {
    it('can submit a form using the above data', () => {
        cy.get('#submitButton').click()
        cy.get('input[name="username"]').clear()
    })
})

describe('check for any empty fields', () => {
    it('can certify there is a username', () => {
        cy.get('input[name="username"]').should('have.value', '')
        cy.get('#para-one').contains('Username must be at least 3 characters')
    })

    it('can certify there is an email', () => {
        cy.get('input[name="email"]').should('have.value', '')
        .type('a')
        .clear()
        cy.get('#para-two').contains('Email is required')
    })

    it('can certify there is a username', () => {
        cy.get('input[name="password"]').should('have.value', '')
        .type('a')
        .clear()
        cy.get('#para-three').contains('Password must be at least 3 characters')
    })
})