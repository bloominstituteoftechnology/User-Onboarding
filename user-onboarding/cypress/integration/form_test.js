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

    it('The proper elements are showing:', () =>{
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        termsInput().should('exist');
        submitButtonDisabled().should('exist');
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
})