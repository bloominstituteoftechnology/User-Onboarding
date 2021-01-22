
describe('Forms App', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    const nameText = () => cy.get('#name');
    const emailText = () => cy.get('#email');
    const passwordText = () => cy.get('#password');
    const termsBox = () => cy.get('#terms');
    describe('Input text', () => {
        it('Can enter name', () => {
            nameText().type('Rodolfo').should('have.value', 'Rodolfo')  
        })
        it('Can enter email', () => {
            emailText().type('rodolfojaspe21@gmail.com').should('have.value', 'rodolfojaspe21@gmail.com')
        })
        it('Can enter password', () => {
            passwordText().type('password').should('have.value', 'password')
        })
    })
    describe('Checkbox', () => {
        it('Checkbox can be checked', () => {
            termsBox().click().should('be.checked')
        })
    })
    describe('Submit', () => {
        it('form can be submitted', () => {
            nameText().type('Rodolfo');
            emailText().type('rodolfo@rodolfo.com');
            passwordText().type('Rodolfo');
            termsBox().click();

            cy.get('button').should('be.enabled').click()
        })
    })
})