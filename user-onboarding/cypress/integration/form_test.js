describe('User Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('sanity check to make sure tests work', () => {
        // "it" is a test.
        // "expect" is an assertion.
        // There can be several assertions per test, but they all need to relate
        // to "the one thing" we're testing.
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5) // strict ===
        expect({}).not.to.equal({})   // strict ===
        expect({}).to.eql({})         // not strict
      })

    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const termsAgree = () => cy.get('input[name=agree]');
    const termsDisagree = () => cy.get('input[name=disagree]');
    const submitBtn = () => cy.get('button[id=submitBtn]');

    describe('Filling Out Inputs', () => {
        it('can type in the inputs', () => {
            nameInput()
            .type('Harry Potter')
            .should('have.value', 'Harry Potter')
    
            emailInput()
            .type('boywholived@hogwarts.com')
            .should('have.value', 'boywholived@hogwarts.com')
    
            passInput()
            .type('chochangorhermione')
            .should('have.value', 'chochangorhermione')
        })
    })

   describe('Adding a new user', () => {
       it('can submit a new user', () => {
           nameInput().type('Ron Weasley')
           emailInput().type('ron&scabbers@hogwarts.com')
           passInput().type('FluerisGorgeous')
           submitBtn().click();
       })
   })

   describe('Checking the terms of service', () => {
       it('can agree and disagree to terms', () => {
           termsAgree().check();
           termsAgree().uncheck();

           termsDisagree().check();
           termsDisagree().uncheck();
       })
   })

   describe('checking for form validation', () => {
       it('can check form validation if an input is left empty', () => {
           submitBtn().should('be.disabled');
           })
       })
   })