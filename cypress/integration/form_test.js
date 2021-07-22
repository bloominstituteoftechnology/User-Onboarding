describe('User Onboarding App', ()=>{
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
    })
   
    it('check for right elements showing', ()=>{
        textInput().should('exist')
        passwordInput().should('exist')
        emailInput().should('exist')

        //submitBtn().should('exist')
    })

    //to test given input
    it('check for the given input', ()=>{
        textInput()//for first_name
        .type("First cy test")
        .should('have.value','First cy test')

        //for password
        passwordInput()
        .type("First Cy password")
        .should('have.value','First Cy password')

        //for email
        emailInput()
        .type("vaibhavi123balar@gmail.com")
        .should('have.value','vaibhavi123balar@gmail.com')

        //for terms checkbox
         termsCheck()
        // submitBtn().should('be.disabled')

    })
    it('Check for submit button', ()=>{
        textInput().type("Vaibhavi")
        passwordInput().type("bababadsds")
        emailInput().type("vaibhavi123balar@gmail.com")
        submitBtn().should('not.be.disabled')

    })
     //checking for form validity
     it('Check if the field does not contain appropriate characters submit button doe not enable', ()=>{
        passwordInput().type("bababadsds")
        submitBtn().should('be.disabled')
        
    })
    
})
const textInput = () => cy.get('input[name=first_name]')
const passwordInput = () => cy.get('input[name=password]')
const emailInput = () => cy.get('input[name=email]')
const termsCheck =() => cy.get('[type="checkbox"]').check()
const submitBtn = () => cy.get('button*[class^="submit"]')
 

