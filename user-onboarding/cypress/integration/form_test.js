describe('User App', () =>{
    beforeEach(()=>{
        cy.visit('localhost:3000')
    })

    const nameInput=()=>cy.get('input[name=name]')
    const emailInput=()=>cy.get('input[name=email]')
    const passwordInput=()=>cy.get('input[name=password]')
    const termsInput=()=>cy.get('input[name=terms]')
    const submitButtonDisabled=()=>cy.get('button[class=regularButton]')
    const submitButtonEnabled=()=>cy.get('button[class=greenButton]')
    const errors=()=>cy.get('div[class=errors]')

    it('The proper elements are showing:', () =>{
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsInput().should('exist');
        submitButtonDisabled().should('exist');
        errors().should('exist');
    })

    describe("Text inputs are functioning correctly",()=>{

        it('Can type a name in name input', () => {
            nameInput()
                .should('have.value', '')
                .type('Alex')
                .should('have.value', 'Alex')
        })

        it('Can type an email in email input', () => {
            emailInput()
                .should('have.value', '')
                .type('alex@alex.com')
                .should('have.value', 'alex@alex.com')
        })

        it('Can type a password in password input', () => {
            passwordInput()
                .should('have.value', '')
                .type('12345678')
                .should('have.value', '12345678')
        })
    })

    describe("Checkbox inputs are functioning correctly",()=>{

        it('Can check the box in terms input', () => {
            termsInput()
                .check()  
                .should('be.checked')
                .uncheck()
                .should('not.be.checked');
        })
    })

    describe("Button class changes color, class, and is able to submit correctly",()=>{

        it('Button is initially disabled', () => {
            submitButtonDisabled().should('be.disabled');
        })
        it('Button enables and submits after required fields',()=>{
            nameInput().type('Alex');
            emailInput().type('alex@alex.com');
            passwordInput().type('12345678')
            termsInput().check();
            submitButtonEnabled().should('not.be.disabled');
        })
    })

    describe("Error messages populate after validation",()=>{

        it('Error populates if name field is too short', () => {
            nameInput().type('Al');
            cy.contains('Name must be 3 or more characters long!');
        })
        it('Error populates if password field is too short', () => {
            passwordInput().type('1234567');
            cy.contains('Password must be 8 or more characters long!');
        })
        it('Error populates if their is not an appropriate email', () => {
            emailInput().type('alex@alex');
            cy.contains('Must be a valid email address!');
        })
        it('Error populates if terms field is unchecked', () => {
            termsInput().uncheck();
            cy.contains('Please read the terms of service and check the box when you are done!');
        })
       
    })
})