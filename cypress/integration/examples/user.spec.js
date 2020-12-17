describe('User Onboarding App', () =>{

    beforeEach(() =>{
        cy.visit('http://localhost:3000/')
    })

    const firstName = () => cy.get("input[name='firstName']")
    const lastName = () => cy.get("input[name='lastName']")
    const email = () => cy.get("input[name='email']")
    const password = () => cy.get("input[name='password']")
    const submitBtn = () => cy.get('button')


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
    })




})