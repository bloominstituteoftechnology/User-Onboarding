// import cy from 'cypress'

describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000') // eslint-disable-line
    })

    /* eslint-disable */
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const termsInput = () => cy.get('input[name=acceptedTerms]')
    const submitButton = () => cy.get('button[type=submit]')
    /* eslint-enable*/

    it('should render the form elements with empty values and disabled button', () => {
        nameInput()
            .should('exist')
            .should('have.value', '')
        emailInput()
            .should('exist')
            .should('have.value', '')
        passwordInput()
            .should('exist')
            .should('have.value', '')
        termsInput()
            .should('exist')
            .should('have.value', 'false')
        submitButton()
            .should('exist')
            .should('be.disabled')
    })

    it('should update input fields accept terms and enable submit button', () => {
        nameInput()
            .type('name')
            .should('have.value', 'name')
        emailInput()
            .type('email@email.com')
            .should('have.value', 'email@email.com')
        passwordInput()
            .type('password')
            .should('have.value', 'password')
        termsInput()
            .click()
            .should('have.value', 'true')
        submitButton()
            .should('not.be.disabled')
    })

    it('should submit a valid form and reset form', () => {
        const name = 'name'
        const email = 'email@email.com'
        const password = 'password'

        nameInput()
            .type(name)
        emailInput()
            .type(email)
        passwordInput()
            .type(password)
        termsInput()
            .click()
        
        submitButton()
            .click()

        nameInput()
            .should('have.value', '')
        emailInput()
            .should('be.empty')
        passwordInput()
            .should('be.empty')
        termsInput()
            .should('have.value', 'false')
    })

    it('should show appropriate error messages', () => {
        /* eslint-disable */
        nameInput().type('n').type('{backspace}')
        cy.contains(/your name/) // eslint-disable-line
        
        emailInput().type('e')
        cy.contains(/email address/) 
        emailInput().type('{backspace}')
        cy.contains(/contact you/)

        passwordInput().type('p').type('{backspace}')
        cy.contains(/secure/)

        termsInput().click().click()
        cy.contains(/accept/)
        /* eslint-enable */
    })
})