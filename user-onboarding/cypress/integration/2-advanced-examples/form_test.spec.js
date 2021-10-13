

describe("App", () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
})
    Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a 3rd party library error with message 'list not defined'
    // and don't want to fail the test so we return false
    if (err.message.includes('Unexpected token')) {
      return false
    }})
  

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const submitBtn = () => cy.get('button');
    const termsOfServiceBox = () => cy.get('input[name=termsOfService');

    it('the ole checkaroo', () => {
        expect(1 + 1).to.equal(2);
    })

    it('elements show up', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        submitBtn().should('exist');
        termsOfServiceBox().should('exist');
    })
describe("filling out the inputs n stuff", () => {
    
    it('can type in the inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('george is testing').should('have.value', 'george is testing');
        
        emailInput()
            .should('have.value', '')
            .type('george.levitre@gmail.com')
            .should('have.value', 'george.levitre@gmail.com') ;
        
        passwordInput()
            .should('have.value', '')
            .type('asdfghj')
            .should('have.value', 'asdfghj') ;
})
describe('can check the box and submit', () => {

    it('termsofservice can be checked', () => {
        termsOfServiceBox().check();
    })

    it('can click submit', () => {
        nameInput().type("Jonathon LeVitre");
        emailInput().type("19jlevitre@gmail.com");
        passwordInput().type('12345678');
        termsOfServiceBox().check();
        submitBtn().click();
        
    })
    it('checks for validation if empty', () => {
        nameInput().type('laksjdlkf');
        nameInput().clear();
    })
    })
})
})
// RIGHT INTO THE DANGER ZOOOONE