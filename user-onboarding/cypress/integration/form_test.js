describe('New User Application', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })
  
    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const termsBox = () => cy.get('[type="checkbox"]');
    const submitBtn = () => cy.get('button[id="submitBtn"]')
  
    it('Sanity test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })
  
    it('Elements are showing?', () => {
        nameInput()
            .should('exist');
        emailInput()
            .should('exist');
        passwordInput()
            .should('exist');
        termsBox()
            .should('exist');
        submitBtn()
            .should('exist');
    })
  
    describe('Can you fill in inputs on empty?', () => {
        it('Can inputs be filled in?', () => {
            nameInput()
                .should('have.value', '')
                .type('Name')
                .should('have.value', 'Name')
            emailInput()
                .should('have.value', '')
                .type('Email@gmail.com')
                .should('have.value', 'Email@gmail.com')
            passwordInput()
                .should('have.value', '')
                .type('Cypress!')
                .should('have.value', 'Cypress!')
            termsBox()
                .check()
                .uncheck()
        })
  
        it('Submit button starts out disabled?', () => {
            submitBtn().should('be.disabled');
        })
  
        it('Submit button enables when all fields are filled?', () => {
            nameInput()
                .type('Name')
            emailInput()
                .type('Email@gmail.com')
            passwordInput()
                .type('Cypress!')
            termsBox()
                .check()
            submitBtn().should('not.be.disabled')
        })
    })
  
    describe('Adding a new user', () => {
        it('Can submit a new user?', () => {
            nameInput()
                .type('Name')
            emailInput()
                .type('Email@gmail.com')
            passwordInput()
                .type('Cypress!')
            termsBox()
                .check()
            submitBtn()
                .click()
            cy.contains('Name')
            cy.contains('Email@gmail.com')
            cy.contains('Cypress!')
        })
    })
  
  })
  
  