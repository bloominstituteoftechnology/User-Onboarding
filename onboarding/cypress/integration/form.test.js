// import { interpolate } from "gsap/gsap-core"

// describe("Form App testing", () => {

//     beforeEach(() => {
//         cy.visit('http://localhost:3000')
//     })

//     const inputs = {
//         name: () => cy.get('#name'),
//         mail: () =>cy.get('#mail'),
//         password: () => cy.get('#password'),
//         terms: () => cy.get('#termOfUse')

//     }
    
    
//     describe('text fields testing', () => {
//         it("name input", () => {
//             inputs.name()
//             .type("testName")
//             .should("have.value", "testName")
//         })
//         it("mail input", () => {
//             inputs.mail()
//             .type("test@mail.com")
//             .should("have.value", "test@mail.com")
//         })
//         it("password input", () => {
//             inputs.password()
//             .type("testPassword")
//             .should("have.value", "testPassword")
//         })
//     })

//     describe('radio button test', () => {
//         it('terms of use testing', () => {
//             inputs.terms()
//             .click()
//             .should('have.value', 'true')
//         })
//     })

//     describe('submit form data', () => {
//         it('submit button', () => {
//             inputs.name()
//             .type("testName")
//             inputs.mail()
//             .type("test@mail.com")
//             inputs.password()
//             .type("testPassword")
//             inputs.terms()
//             .click()
//             cy.get('#role')
//             .select("Mentor")
//             cy.get('Input[type="submit"]')
//             .should('be.enabled')
//             .click()
//             cy.get('form')
//             .submit()
//         })
//     })
//     describe('form validation', () => {
//         it('username', () => {
//             inputs.name()
//             .type("12")
//             cy.get('#warningName')
//             .should('have.text', 'username must be at least 3 characters long')
//             cy.get('Input[type="submit"]')
//             .should('be.disabled')
//         })
//         it('password', () => {
//             inputs.password()
//             .type("1234")
//             cy.get('#warningPassword')
//             .should('have.text', 'password must be at least 5characters long')
//             cy.get('Input[type="submit"]')
//             .should('be.disabled')
            
//         })
//         it('email', () => {
//             inputs.mail()
//             .type("1234")
//             cy.get('#warningEmail')
//             .should('have.text', 'you must provide a valid email')
//             cy.get('Input[type="submit"]')
//             .should('be.disabled')
//         })
//     })
// })
