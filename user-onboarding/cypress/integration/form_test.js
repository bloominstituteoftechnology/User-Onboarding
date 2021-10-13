describe('User On-Boarding', () => {
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const pwdInput = () => cy.get('input[name=password]');
    const terms = () => cy.get('[type=checkBox');
    const submitButton = () => cy.get('button[id=submitButton]');

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        pwdInput().should('exist')
        terms().should('exist')
        submitButton().should('exist')

    })

    it('can type in inputs', () => {
        const name = 'Princess Pansy'
        const email = 'terpprm@gmail.com'
        const password = 'CanWeNot?!'

        nameInput().type(name).should('have.value', name)
        emailInput().type(email).should('have.value', email)
        pwdInput().type(password).should('have.value', password)
    })

    it('can accept tos', () => {
        terms().check().uncheck();

    })

    it('can submit form', () => {
        cy.get('[disabled]').click({force: true}).click()
    })

    it('cannot submit empty form', () => {
        cy.get('#submitButton').should('be.disabled')
    })
})