describe('quotes app', () =>{

    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const termsCheck = () => cy.get('input[type=checkbox]')
    const submitBtn = () => cy.get('button[id=submitBtn]');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
    })

    it('proper elements showing', () =>{
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist');
        termsCheck().should('exist');
        submitBtn().should('exist');
        cy.contains('Name').should('exist');
    })

    describe('inputs can be filled from empty', () => {

        // it('navigates well', () => {
        //     cy.url().should('include', 'localhost');
        // })

        it('submit button starts disabled', () => {
            submitBtn().should('be.disabled');
        })
        
        it('should be able to type in all fields', () => {
            firstNameInput().should('have.value', '')
            .type('something here')
            .should('have.value', 'something here')

            lastNameInput().should('have.value', '')
            .type('something here')
            .should('have.value', 'something here')

            emailInput().should('have.value', '')
            .type('something here')
            .should('have.value', 'something here')

            passInput().should('have.value', '')
            .type('something here')
            .should('have.value', 'something here')
        })

    //     it('should not be able to submit without all fields filled', ())
     })


})