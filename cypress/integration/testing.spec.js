describe('Test App',()=>{
    //schedule something to happen before each test
    //before each test we navigate to http://localhost:3000
    beforeEach(()=>{
      cy.visit('http://localhost:3000')
    })
    const nameinput = () => cy.get('input[name="name"]')
    const emailInput = () => cy.get('input[name="email"]')
    const passwordInput = () => cy.get('input[name="password"]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')
    const terms = () => cy.get('input[type="checkbox"]').check()
    //use the 'it' keyword for tests
    it(' the proper elements exist',()=>{
   nameinput().should('exist')
   emailInput().should('exist')
   passwordInput().should('exist')
   submitBtn().should('exist')
   terms().should('exist')
    })
    describe('filling out inputs and cancelling',() =>{
      it('submitbtn is disabled',() => {
        submitBtn().should('be.disabled')
      })
      it('it can type inside the input',() => {
        nameinput()
        .should('have.value','')
        .type('Lilia')
        .should('have.value','Lilia')
        emailInput()
        .should('have.value','')
        .type('lilia.ovcharenko@gmail.com')
        .should('have.value','lilia.ovcharenko@gmail.com')
        passwordInput()
        .should('have.value','')
        .type('Lilia1989')
        .should('have.value','Lilia1989')
      })
      it('it can check on Terms',() => {
        terms()
        .should('have.checked','')
      })
      describe('the submit btn enables when all inputs filled and Agreed on terms', () => {
          it('it can submit and delete', () =>{
            cy.contains(/lily.ov.com/).should('not.exist')
            nameinput().type('lilia')
            emailInput().type('lily.ov.com')
            passwordInput().type('1234Lily')
            terms().check('Agree')
            //cy.get('[disabled]').click({force: true})
            //submitBtn().should('not.be.disabled')
            submitBtn().click()
            cy.contains(/lily.ov.com/).should('exist')
            //submitBtn().should('be.disabled')
      })
    })
    })
  })