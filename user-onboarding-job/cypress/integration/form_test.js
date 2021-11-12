
describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //Stored Values
    const nameInput = () => cy.get('input[name=username]');
    const emailInput  = () => cy.get('input[name=email]');
    const passwordInput  = () => cy.get('input[name=password]');
    const checkbox  = () => cy.get('input[name=tos]');
    const submitBtn  = () => cy.get('input[id=submitBtn]');
    const userError = () => cy.get('.userError');
    const emailError = () => cy.get('.emailError')
    const tosError = () => cy.get('.tosError')

    it('Elements exist', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        checkbox().should('exist')
        submitBtn().should('exist')
    })

    describe('Can input data and submit', () => {
        
        it('can access site', () => {
            cy.url().should('include', 'localhost')
        })

        it('can input the data', () => {
            nameInput().should('have.value', '')
            nameInput().type('Gamer')
            nameInput().should('have.value', 'Gamer')
            
            emailInput().should('have.value', '')
            emailInput().type('Gamer@gmail.com')
            emailInput().should('have.value', 'Gamer@gmail.com')
            
            passwordInput().should('have.value', '')
            passwordInput().type('GamerGamer')
            passwordInput().should('have.value', 'GamerGamer')
        })

        it('can check terms of service', () => {
           checkbox().click()
        })

        it('can submit form', () => {
            submitBtn().click()
        })

    })

    describe('form validates', () => {

       it('values are empty', () => {
        nameInput().should('have.value', '')
        emailInput().should('have.value', '')
        passwordInput().should('have.value', '')
       })

       it('causing errors', () => {
        nameInput().type('G')
        emailInput().type('Ga')
        passwordInput().type('Gam')
        submitBtn().click();
       })

       it('checking for errors', () => {
        userError().should('exist')
        emailError().should('exist')
        tosError().should('exist')
       })

    })
})