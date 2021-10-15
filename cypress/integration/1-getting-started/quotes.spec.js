


describe('Quotes App', () =>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000/');
    })

    const nameInput = () => cy.get('input[name=name]');
    const emailIn = () => cy.get('input[name=email]');
    const passIn = () => cy.get('input[name=password]');
    const serviceInput = () => cy.get('input[name=service]');
    const submitBtn = () => cy.get('button')


    
    describe('Filling out the input and cancelling', () => {
        it('can navigate to the url', () => {
            cy.url().should('include', 'localhost');
        })
        
        it('can type in the inputs', () =>{
            nameInput()
            .should('have.value', '')
            .type('Ulises')
            .should('have.value', 'Ulises');
            emailIn()
            .should('have.value', '')
            .type('fake@email.com')
            .should('have.value', 'fake@email.com');
            passIn()
            .should('have.value', '')
            .type('P@$$word')
            .should('have.value', 'P@$$word');
            serviceInput()
            .click()
            .should('have.value', 'on')
            submitBtn()
            .click()
        })
    })
}) 