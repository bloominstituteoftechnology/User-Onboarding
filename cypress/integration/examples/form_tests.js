// write tests here
describe('Add New Employee App', () => {

    beforeEach(() => {
        cy.visit('https://reqres.in/api/users')
    })

    const usernameInput = () => cy.get('input[name="username"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const canCheckRead = () => cy.get('checkbox[name="read"]')
    const canCheckAgreed = () => cy.get('checkbox[name="agreed"]')
    const submitButton = () => cy.get('button[id="button"]')

    it('can type inside the inputs', () => {
        usernameInput()
            .should('have.value', '')
            .type('The best programmer ever')
            .should('have.value', 'The best programmer ever')

        emailInput()
            .should('have.value', '')
            .type('thebestprogrammerever@me.com')
            .should('have.value', 'thebestprogrammerever@me.com')

        passwordInput()
            .should('have.value', '')
            .type('Iamthebest')
            .should('have.value', 'Iamthebest')

    it('can check checkboxes', () => {
        canCheckRead()
            .should('have.value', true)

        canCheckAgreed()
            .should('have.value', true)

    })
    })
})
