describe('Quotes App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password')
    const submitBtn = () => cy.get(`button[id="submitBtn"]`)
    const tosInput = () => cy.get('input[name=tos]')

    it('elements are showing', () => {
        usernameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        submitBtn().should('exist')
        tosInput().should('exist')
    })

    it('submit button needs to be disabled', () => {
        submitBtn().should('be.disabled')
    })

    it('you can type here', () => {
        usernameInput()
            .should('have.value', '')
            .type('tyler')
            .should('have.value', 'tyler')

        emailInput()
            .should('have.value', '')
            .type('harriscourtney98@gmail.com')
            .should('have.value', 'harriscourtney98@gmail.com')

        passwordInput()
            .should('have.value', '')
            .type('codingrox')
            .should('have.value', 'codingrox')

        tosInput()
            .should('be.visible')
            .and('not.be.checked')
            .check()



    })

    it('submit button becomes available', () => {
        usernameInput().type('tyler')
        emailInput().type('harriscourtney98@gmail.com')
        passwordInput().type('codingrox')
        tosInput().check({force: true })
        submitBtn().click({force: true })
    })

     describe('Form Validation', () => {
    it('Checks for validation if input is left empty', () => {
        usernameInput().type('tyler')
        emailInput().type('h{backspace}')
        passwordInput().type('codingrox')
        tosInput().check({force: true })
        errors().contains('Must be a valid email address')

    })

})

})

// const baseUrl = "http://localhost:3000/"

// describe('The Form Page', () => {

//     it("Successfully loads", () => {
//         cy.visit(baseUrl)
//     })


// })

// describe('Fill Out Form', () => {
//     it("Fill out and check form for correct values", () => {

//         cy.get('input[name=username]').should('have.value', '').type('mikesflapper').should('have.value', 'mikesflapper')
//         cy.get('input[name=email]').should('have.value', '').type('nathanjobstom@gmail.com').should('have.value', 'nathanjobstom@gmail.com')
//         cy.get('input[name=password]').should('have.value', '').type('password123').should('have.value', 'password123')
//         cy.get('input[name=tos]').should('be.visible').and('not.be.checked').check()
//         cy.get('#submit').should('not.be.disabled')
//     })
// })

// describe('Submit Form', () => {
//     it('Looks for a new user card with the correct info', () => {
//         cy.get('#submit').click()
//         cy.get('.user h2').contains('mikesflapper')
//         cy.get('.user h3').contains('nathanjobstom@gmail.com')
//     })
// })

// describe('Form Validation', () => {
//     it('Checks for validation if input is left empty', () => {
//         cy.get('#username').type('mikesflapper')
//         cy.get('#password').type('password123')
//         cy.get('#email').type('n{backspace}')
//         cy.get('#tos').check()
//         cy.get('.errorMsg').contains('Must include email address.')
//     })
// })