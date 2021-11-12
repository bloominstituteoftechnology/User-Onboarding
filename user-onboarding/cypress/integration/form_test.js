describe('User On-Boarding', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    const nameInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const pwdInput = () => cy.get('input[name=password]');
    const terms = () => cy.get('[type=checkBox');
    const submitBtn = () => cy.get('button');

    it('Sanity test', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it(' Should show proper elements', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        pwdInput().should('exist')
        terms().should('exist')
        submitBtn().should('exist')
      })
    
      describe('Filling out input elements', () => {
        it('empty form cant be submited', () => {
          submitBtn().should('be.disabled')
        })

        it('pass valid inputs', () => {
            const name = 'laila'
            const email = 'lovelyllama@gmail.com'
            const password = 'SayWhat?!'
    
            nameInput().type(name).should('have.value', name)
            emailInput().type(email).should('have.value', email)
            pwdInput().type(password).should('have.value', password)
            submitBtn().should('have.value')
        
        })

         it('accept tos', () => {
        terms().check().uncheck();

        })

        it('can submit form', () => {
        cy.get('[disabled]').click({force: true}).click()
        })

        it('show proper error for email input', () => {
            emailInput().type('test')
            errorDiv().should('have.text', 'Must be a valid email')
            emailInput().clear()
            errorDiv().should('have.text', 'Email is required')
         })
  
        it('show proper error for password input', () => {
            pwdInput().type(' ').clear()
            errorDiv().should('have.text', 'Password is required')
        })
  
        it('show proper error for tos input', () => {
            term().click().click()
            errorDiv().should('have.text', 'Must agree with Terms of service')
        })
            })
        })