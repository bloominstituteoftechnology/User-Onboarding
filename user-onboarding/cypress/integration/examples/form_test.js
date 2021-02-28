// - [ ]  Get the `Name` input and type a name in it.
// - [ ]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [ ]  Get the `Email` input and type an email address in it
// - [ ] Get the `password` input and type a password in it
// - [ ]  Set up a test that will check to see if a user can check the terms of service box
// - [ ] Check to see if a user can submit the form data
// - [ ] Check for form validation if an input is left empty

describe('Form', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const checkBox = () => cy.get('[type="checkbox"]')
    const submitButton = () => cy.get('button[id = submitBtn]')

    it('checkes the input in the Name input area', () =>{
        nameInput()
            .should('exist')
            .should('have.value', '')
            .type('Amy')
            .should('have.value', 'Amy')
    })
    it('checkes the input in the Email input area', () =>{
        emailInput()
            .should('exist')
            .should('have.value', '')
            .type('Amy@amy.com')
            .should('have.value', 'Amy@amy.com')
    })
    it('checkes the input in the password input area', () =>{
        passwordInput()
            .should('exist')
            .should('have.value', '')
            .type('abc123')
            .should('have.value', 'abc123')
    })
    it('checks that the checkbox can be checked', () => {
        checkBox()
            .should('exist')
            .check({force: true})
            .should('be.checked')
    })


    describe('Filling out the form', () => {
        it('checks that the submit button is disabled', () =>{
            submitButton().should('be.disabled')
        })
        it('checks that the submit button is enabled when the form is filled out', () =>{
            nameInput()
            .should('exist')
            .should('have.value', '')
            .type('Amy');
        emailInput()
            .should('exist')
            .should('have.value', '')
            .type('Amy@amy.com');
        passwordInput()
            .should('exist')
            .should('have.value', '')
            .type('abc123');
        checkBox()
            .should('exist')
            .check({force: true});
        submitButton().should('be.enabled')
        })
    })

})