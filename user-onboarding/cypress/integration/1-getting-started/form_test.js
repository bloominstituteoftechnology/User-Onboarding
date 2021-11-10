describe('User-Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const usernameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const wrkPref = () => cy.get('input[type="radio"]');
    const termsInput = () => cy.get('input[name=terms]');
    const submitBtn = () => cy.get(`button[id='submit']`);

    const workerElem = () => cy.get('[class="Worker"]');

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
                .check("fullTime")
                .should('be.checked');

            wrkPref()
                .check("partTime")
                .should('be.checked');
        })

        it('checkbox field can be checked', () => {
            termsInput()
                .check()
                .should('be.checked')
        })
    })

    describe('all inputs can be filled', () => {

        it('submit button is disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('input all fields', () => {
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

            wrkPref()
                .first()
                .check()

            termsInput()
                .check()
                .should('be.checked')

            submitBtn()
                .should('be.enabled')
                .click()

            workerElem()
                .should('exist')
                
        })
    })


}) //test end

