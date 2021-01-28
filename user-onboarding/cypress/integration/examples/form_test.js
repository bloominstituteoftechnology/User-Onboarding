// describe('form_test app', ()=>{
//     beforeEach(()=>{
//         cy.visit('http://localhost:3000')
//     })

//     const nameInput=()=>cy.get('input.[name="name"]')
//     const emailInput=()=>cy.get('input.[name="email"]')
//     const passwordInput=()=>cy.get('input.[name="password"]')
//     const submitBtn=()=>cy.get('button[id="submitBtn"]')

//     //tests
//     it('sanity test',()=>{
//         expect(1+2).to.equal(3)
//         expect(2+2).not.to.equal(5)
//     })

//     it('proper elements on screen',()=>{
//         nameInput()
//         .should('exist')
//         emailInput()
//         .should('exist')
//         passwordInput()
//         .should('exist')
//         submitBtn()
//         .should('exist')
//     })
// })
describe('Advance Forms', () => {
    
    beforeEach(() => cy.visit('http://localhost:3000'))

    describe('filling inputs and submit', () => {

        it('can type and see if the correct name', () => {
            cy.get('input[name=name]')
             .type('Corie Stewart')
             .should('have.value', 'Corie Stewart')
            
             cy.get('input[name=email]')
            .type('cc00262@gmail.com')

            cy.get('input[name=password]')
            .type('123456789')

            cy.get('input[name=termsOfService]')
            .click()

            cy.get('#submitBtn')
            .click()
        })
    })

    describe('Filling out inputs and cancelling', () => {
        it('submit button is disabled', () => {
            cy.get('#submitBtn').should('be.disabled')
        })
    })
})






// Get the Name input and type a name in it.
//  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
//  Get the Email input and type an email address in it
//  Get the password input and type a password in it
//  Set up a test that will check to see if a user can check the terms of service box
//  Check to see if a user can submit the form data
//  Check for form validation if an input is left empty