describe('User Onboarding Tests', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })


    //Getters
    const first_name = () => cy.get('input[name=first_name]')
    const last_name = () => cy.get('input[name=last_name]')
    const email = () => cy.get('input[name=email]')
    const password = () => cy.get('input[name=password]')
    const submitBtn = () => cy.get("button[id='submitBtn']");
    const termsOfService = () => cy.get('input[name=termsOfService]');

    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })

    it('Check to make sure all getters are set properly', () => {
        first_name().should('exist');
        last_name().should('exist');
        email().should('exist');
        password().should('exist');
        submitBtn().should('exist');
        termsOfService().should('exist');
    })

    describe('filling out input', () => {

        it('filling out first name input', () => {
            first_name()
                .should('have.value', '')
                .type('tristan')
                .should('have.value', 'tristan')
        })
        it('filling out last name input', () => {
            last_name()
                .should('have.value', '')
                .type('harrower')
                .should('have.value', 'harrower')
        })
        it('filling out email input', () => {
            email()
                .should('have.value', '')
                .type('harrowertristan@gmail.com')
                .should('have.value', 'harrowertristan@gmail.com')
        })
        it('filling out password input', () => {
            password()
                .should('have.value', '')
                .type('password')
                .should('have.value', 'password')
        })
    })
    describe('test terms of service checkbox', () => {
        it('click terms of service', () => {
            termsOfService()
                .click()
                .should('have.value', 'true')
        })
    })
    describe('check filling out a new forms', () => {
        it('fill out form', () => {
            first_name().type('tristan');
            last_name().type('harrower')
            email().type('harrowertristan@gmail.com');
            password().type('password');
            termsOfService() .click();
            submitBtn().click();
            cy.contains('tristan harrower').should('exist');
            cy.contains('harrowertristan@gmail.com').should('exist');
        })
    })
    describe('form validation if an input is left empty', () =>{
        it('fill form halfway then check validation', () => {
            first_name().type('tristan');
            last_name().type('harrower')
            email().type('harrowertristan@gmail.com');
            submitBtn().should('have.attr', 'disabled');
        })
    })
    
   
})



