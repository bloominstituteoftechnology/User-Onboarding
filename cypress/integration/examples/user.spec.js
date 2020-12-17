describe('User Onboarding App', () =>{

    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })

    const firstName = () => cy.get("input[name='firstName']")
    const lastName = () => cy.get("input[name='lastName']")
    const email = () => cy.get("input[name='email']")
    const password = () => cy.get("input[name='password']")
    const submitBtn = () => cy.get('button')
    const terms = () => cy.get("input[name='termsOfService']")


    it('test to see if it works', () =>{
        expect(1 + 2).to.equal(3);
        expect(4 * 5).not.to.equal(6);
    })

    it('Selecting elements from the DOM', () =>{
        firstName().should('exist');
        lastName().should('exist');
        email().should('exist');
        password().should('exist');
        submitBtn().should('exist');
        terms().should('exist');
    })

    it('Can type into the inputs', () =>{
        firstName()
        .should('have.value', '')
        .type('Diego')
        .should('have.value', 'Diego')
        lastName()
        .should('have.value', '')
        .type('Roman')
        .should('have.value', 'Roman')
        email()
        .should('have.value', '')
        .type('diegoroman@hotmail.com')
        .should('have.value', 'diegoroman@hotmail.com')
        password()
        .should('have.value', '')
        .type('diegoroman123')
        .should('have.value', 'diegoroman123')
        terms()
        .check();
    })
    it('can submit the form data', () =>{
        firstName().type('Diego')
        lastName().type('Roman')
        email().type('diegoroman@hotmail.com')
        password().type('diegoroman123')
        terms().check();
        submitBtn().click();
    })




})