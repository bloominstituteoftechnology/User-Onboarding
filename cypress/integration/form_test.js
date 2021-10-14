import { isEmpty } from "lodash";
import { getMaxListeners, hasUncaughtExceptionCaptureCallback } from "process";

describe('FormTest App', () => {
    beforeEach(() => {
        cy.visit(`http://localhost:3000`);
    })

    const textInput = () => cy.get('input[name=username]');
    const emailInput= () => cy.get('input[name=email]');
    const passwordInput= () => cy.get('input[name=password]')
    const tosInput= () => cy.get('input[name=tos]');
    const submitBtn= () => cy.get("button[id='submitBtn']");
    const validName= () => cy.get("div[id='userError']");
    const validEmail= () => cy.ger("div[id='emailError']");
    const validPW = () => cy.get("div[id='pwError']");
    const validTOS = () => cy.get("div[id='tosError']");

    it('sanity check to make sure tests work', () => {
        expect(1 + 1).to.equal(2);
    })

    it('Proper elements are showing', () => {
        textInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        submitBtn().should('exist');
        cy.contains('submit').should('exist');
    })

    describe('Can navigate to the url', () => {
        it('Can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })
    })

    describe('Filling out the inputs and submitting', () => {

        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can type in the input', () => {
            textInput()
                .should('have.value', '')
                .type('Nekahl')
                .should('have.value', 'Nekahl');
            emailInput()
                .should('have.value', '')
                .type('nekahl@gmail.com')
                .should('have.value', 'nekahl@gmail.com');
            passwordInput()
                .should('have.value', '')
                .type('123456789')
                .should('have.value', '123456789')
            tosInput()
                .click()
                .should('have.value', 'on');
                
        })

        it('Submit button enables when all fields are filled out', () => {
            textInput().type('Zurvick');
            emailInput().type('zurv@yahoo.com');
            passwordInput().type('123456789');
            tosInput().click()
            tosInput().should('have.value', 'on');
            submitBtn().should('not.be.disabled');
        })
    })

    describe('Adding a new user', () => {

        it('Can submit new user', () => {
            textInput().type('mikey');
            emailInput().type('mike@gmail.com');
            passwordInput().type('123456789');
            tosInput().click();
            submitBtn().should('not.be.disabled');
            submitBtn().click();
        })
    })

    describe('Form validation is working', () => {

        it('Validation is working', () => {
            textInput()
                .type('123')
                .clear()
                cy.contains('Usename is required!')
            emailInput()
                .type('123')
                .clear()
                cy.contains('Email is required!')
            passwordInput().type('1234')
                .type('123')
                .clear()
                cy.contains('Password is required!')
            tosInput().click().click()
                cy.contains('You must agree to the Terms Of Service');
        })
    })
})