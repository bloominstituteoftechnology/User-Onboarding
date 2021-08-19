describe('Team Onboarding App', ()=> {
    beforeEach(()=> {
        cy.visit('http://localhost:3000') 
    })
    // catching dom elements 

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const roleInput = () => cy.get('select[name=role]');
    const tosCheckbox = () => cy.get('input[name=termsOfService]')
    const submitButton = () => cy.get ('button[class="submit-button"]')

    it('Sanity Check to make sure tests are working', ()=> {
        expect(1+4).to.equal(5)
        expect(1+1).not.to.equal(3)
    })

    it('Check to see if proper elements are showing', ()=> {
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        roleInput().should('exist');
        tosCheckbox().should('exist');
        submitButton().should('exist');
    })

    describe('Test if input fields can be filled out', ()=> {
        
    })
})



