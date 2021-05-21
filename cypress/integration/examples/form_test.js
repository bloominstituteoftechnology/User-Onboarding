describe('User App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    const nameInput = () => cy.get('input[data-test=text-input-field')
    const emailInput = () => cy.get('input[name=author]')
    const passwordInput = () => cy.get('input[name=password]')
    const checkboxInput = () => cy.get('input[name=termsOfService]')
    const submitBtn = () => cy.get('button[id=submitBtn]')

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
    })

    describe('Filling in the inputs', () => {
        describe('Text inputs', () => {
            it('can type in the inputs', () => {
                nameInput()
                    .should('have.value', '')
                    .type('Dom')
                    .should('have.value', 'Dom')
                emailInput()
                    .should('have.value', '')
                    .type('dommy@test.com')
                    .should('have.value', 'dommy@test.com')
                passwordInput()
                    .should('have.value', '')
                    .type('12345qwert')
                    .should('have.value', '12345qwert')

            })
        })

        describe('Checkbox', () => {
            it('can put a check in the checkbox', () => {
                checkboxInput()
                    .should('not.be.checked')
                    .check()
                    .should('be.checked')
            })
        })
    })

    describe('Submitting form data', () => {
        it('can submit form data', () => {
            nameInput().type('Button test')
            emailInput().type('button@test.com')
            passwordInput().type('secretButton')
            checkboxInput().check()
            submitBtn().click()
        })
    })

    describe('Checking form validation', () => {
        it('can check if an input is left empty', () => {
            submitBtn().should('be.disabled')
        })
    })

})