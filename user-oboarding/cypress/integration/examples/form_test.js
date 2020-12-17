// Get the Name input and type a name in it.
// Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// Get the Email input and type an email address in it
// Get the password input and type a password in it
// Set up a test that will check to see if a user can check the terms of service box
// Check to see if a user can submit the form data
// Check for form validation if an input is left empty

/*global cy*/


describe('User-Onboarding app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001/')
    })

    // it('sanity test', () => {
    //     expect(1 + 5).to.equal(6)
    // });
    // it('sanity test2', () => {
    //     expect(2-1).to.equal(10)
    // })
    
    const nameInput = () => cy.get("input[name='name']");
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const serviceTermsInput = () => cy.get('input[name="serviceTerms"]');
    const submitBtn = () => cy.get('button');

    
    // Name
    it('Name tests', () => {
        nameInput().type('Johnny Boy');
        nameInput().should('have.value', 'Johnny Boy')
    });
    //Email
    it('Email tests', () => {
        emailInput().type('lindsay@steve.org');
    //Password
    });
    it('Password tests', () => {
        passwordInput().type('teradactals')
    });
    it('Terms of service tests', () => {
        serviceTermsInput().click()
    });
    it('Submit form check', () => {
        //Submit is disabled at beginning
        submitBtn().should('be.disabled')
        //Add text to name input
        nameInput().type('Yola');
        //Submit button should still be disabled
        submitBtn().should('be.disabled')
        //Add text to email input
        emailInput().type('lily@tilly.sorring')
         //Submit button should still be disabled
         submitBtn().should('be.disabled')
         //Add text to password input
         passwordInput().type('ternary');
         //Submit button should still be disabled
         submitBtn().should('not.be.disabled');

        //  //Service terms button clicked
        //  serviceTermsInput().click()
        //  // Submit button should be enabled
        //  submitBtn().should('not.be.disabled');

         // Check for form validation if an input is left empty
         
         
        })
             it('Form Validation', () => {
                //All text inputs are empty
                //Submit form is enabled
                nameInput().clear();
                submitBtn().should('be.disabled');
                emailInput().clear();
                submitBtn().should('be.disabled');
                passwordInput().clear();
                submitBtn().should('be.disabled');
             })
})

