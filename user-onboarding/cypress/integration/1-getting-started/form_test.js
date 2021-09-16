describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const wrkPref = () => cy.get('input[name=wrkPref]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get(`button[id='submit']`)

    it('inputs exist', () => {
        usernameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        wrkPref().should('exist');
        termsInput().should('exist');
        submitBtn().should('exist');
    })

    describe('inputs can be filled out', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
          })

        it('submit button is disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('input fields can recieve type', () => {
            usernameInput()
                .should('have.value', '')
                .type('moselyBigg')
                .should('have.value', 'moselyBigg')

            emailInput()
                .should('have.value', '')
                .type('moseleyB@gmail.com')  
                .should('have.value', 'moseleyB@gmail.com')
                
            passwordInput()
                .should('have.value', '')
                .type('password123')
                .should('have.value', 'password123')
        })

        it('radio fields can be selected', () => {
            wrkPref()
                .first()
                .check(1)
        })
    })


}) //test end

