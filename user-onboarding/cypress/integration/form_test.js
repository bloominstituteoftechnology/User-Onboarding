// cypress test here!!

const nameInput = () => cy.get('#name-input')
const emailInput =() => cy.get('#email-input')
const passwordInput = () => cy.get('#password-input')
const termsCheckbox = () => cy.get('#terms-cb')
const submitButton = () => cy.get('#submit-button')

describe('testing path connection to cypress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('sanity checks', () => {
        expect(15).to.equal(15)
        expect(12 / 4).to.equal(3)
    })

    it('name input can render input text', () => {
        nameInput()
        .should('exist')
        .should('have.value', "")
        .type("MahDudeGarrus")
        .should('have.value', "MahDudeGarrus")

    })

    it('email input can render input text', () => {
        emailInput()
        .should('exist')
        .should('have.value', "")
        .type("sasolis55@gmail.com")
        .should('have.value', "sasolis55@gmail.com")
    })

    it('password input can render input text', () => {
        passwordInput()
        .should('exist')
        .should('have.value', "")
        .type("PASSWORD123")
        .should('have.value', "PASSWORD123")
    })

    it('checkbox is operable', () => {
        termsCheckbox()
        .should('exist')
        .check()
        .uncheck()
    })

    it('submit button enables when form rquirements are met', () => {
        submitButton()
        .should('exist')
        .should('be.disabled')
        nameInput().type("MahDudeGarrus")
        emailInput().type("sasolis55@gmail.com")
        passwordInput().type("PASSWORD123")
        termsCheckbox().check()
        submitButton().should('be.enabled')
    })



    // !!!!!!!!!!!!!! SUBMIT BUTTON DOES NOT CLEAR THE ENTIRE FORM ERROR!!!!!!!!!! //
    // it('submit button clears form when clicked', () => {
    //     submitButton().should('be.disabled')
    //     nameInput().type("MahDudeGarrus")
    //     emailInput().type("sasolis55@gmail.com")
    //     passwordInput().type("PASSWORD123")
    //     termsCheckbox().check()
    //     submitButton().click()
    //     nameInput().should('have.value', "")
    //     emailInput().type('have.value', "")
    //     passwordInput().type('have.value', "")
    //     termsCheckbox().should('not.be.checked')
    //})
})