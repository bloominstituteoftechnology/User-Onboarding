

describe('User Creator Tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const nameInput = () => cy.get('input [name = name]');
    const emailInput = () => cy.get('input [name = email]');
    const passInput = () => cy.get('input [name = password]');
    const termsInput = () => cy.get('[type = checkbox]');
    const submitBtn = () => cy.get(`button[id = "submitButton"]`);

    it('sanity test', () => {
        expect(1+1).to.equal(2);
    })

    it('Name Tests', () => {
        nameInput()
            .should('exist')
            .type('Justin')
            .should('have.value', 'Justin')
    })

    it('Email Tests', () => {
        emailInput()
            .should('exist')
            .type('justinpeisker@gmail.com')
            .should('have.value', 'justinpeisker@gmail.com')
    })

    it('Password Tests', () => {
        passInput()
            .should('exist')
            .type('12345')
            .should('have.value', '12345')
    })

    it('Terms Tests', () => {
        termsInput()
            .should('exist')
            .check()
            .uncheck()
    })

    it('Submit Tests', () => {
        nameInput().type('Justin');
        emailInput().type('justin@gmial.com');
        passInput().type('123rr')
        submitBtn().click()
    })

    
})