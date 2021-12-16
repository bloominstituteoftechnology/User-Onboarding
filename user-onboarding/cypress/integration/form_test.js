describe('Users App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const fNameInput = () => cy.get('input[name=first_name]');
    const lNameInput = () => cy.get('input[name=last_name]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const terms = () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get('button');
    const foobarInput = () => cy.get('input[name=foobar]');

    it('Are tests working properly?', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(6);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Are all required elements showing?', () => {
        fNameInput().should('exist');
        lNameInput().should('exist');
        email().should('exist');
        password().should('exist');
        terms().should('exist');
        submitBtn().should('exist');
        foobarInput().should('not.exist');
    })

    describe('Filling out the inputs', () => {
        it('Can you type in required inputs?', () => {
            fNameInput()
            .should('have.value', '')
            .type('Joe')
            .should('have.value', 'Joe')

            lNameInput()
            .should('have.value', '')
            .type('Shmoe')
            .should('have.value', 'Shmoe')

            email()
            .should('have.value', '')
            .type('abc@gmail.com')
            .should('have.value', 'abc@gmail.com')

            password()
            .should('have.value', '')
            .type('abcd1234')
            .should('have.value', 'abcd1234')
        }) 

        it('Checkbox is selectable', () => {
            terms()
            .should('not.be.checked')
            .check()
            .should('be.checked')
        })

        it('After filling in input, the submit button adds the user and clears fields', () => {
            submitBtn().should('be.disabled');
            fNameInput().type('John');
            lNameInput().type('Doe');
            email().type('zyx@gmail.com');
            password().type('1234abcd');
            terms().check()

            submitBtn()
            .should('not.be.disabled')
            .click()

            fNameInput().should('have.value', '')
            lNameInput().should('have.value', '')
            email().should('have.value', '')
            password().should('have.value', '')
            terms().should('not.be.checked')

        })

    })
})