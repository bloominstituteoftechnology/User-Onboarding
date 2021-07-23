describe('User Onboarding App',()=>{
    
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })

    //fetching inputs
    const nameInput=()=>cy.get('input[name=username]')
    const emailInput=()=>cy.get('input[name=email]')
    const passwordInput=()=>cy.get('input[name=password]')
    const terms=()=>cy.get('input[name=terms]')
    const submitBtn=()=>cy.get('button[id="submitBtn"]')

    //checking if "name" is empty, adding text, verifying text was entered
    it('check text',()=>{
        nameInput()
        .should('have.value','')
        .type('Test')
        .should('have.value','Test')
    })

    //checking if "email" is empty, adding text, verifying text was entered
    it('check email',()=>{
        emailInput()
        .should('have.value','')
        .type('cypress@test.com')
        .should('have.value','cypress@test.com')
    })

    //checking if "password" is empty, adding text, verifying text was entered
    it('check password',()=>{
        passwordInput()
        .should('have.value','')
        .type('itsasecret')
        .should('have.value','itsasecret')
    })

    //Checking for a submit button that is disabled upon render
    it('check submit button',()=>{
        submitBtn()
        .should('be.disabled')
    })

    //Checking for terms, and that it can be toggled 
    it('check terms',()=>{
        terms()
        .click()
    })

})