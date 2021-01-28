// - [ 1]  Get the `Name` input and type a name in it.
// - [ 2]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [ 3]  Get the `Email` input and type an email address in it
// - [ 4] Get the `password` input and type a password in it
// - [ 5]  Set up a test that will check to see if a user can check the terms of service box
// - [ 6] Check to see if a user can submit the form data
// - [ ] Check for form validation if an input is left empty


describe('Form App', ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })
    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    const pwInput = () => cy.get('input[name="password"]');
    const termsInput = () => cy.get('input[name="terms"]');
    
    it ('sanity test', ()=>{
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(3);
    })

    //Parts 1 and 2 test.
   it('get the Name input and put a name in it', ()=>{
    nameInput().type('Monica')
    .should('exist')
    .should('have.value', "Monica");
    })

    //Part 3
    it("Get the `Email` input and type an email address in it", ()=>{
    emailInput().type('monica@gmail.com')
    .should('exist')
    .should('have.value', "monica@gmail.com");
    });

    //Part 4
    it('Get the `password` input and type a password in it',()=>{
        pwInput().type('password')
        .should('exist')
        .should('have.value', "password");
    })

    //Part 5
    it('Set up a test that will check to see if a user can check the terms of service box',()=>{
        termsInput().click();
    })

    //Part 6
    it('Check to see if a user can submit the form data', ()=>{
        //if all the forms are filled out
        nameInput().type('Monica');
        emailInput().type('monica@gmail.com');
        pwInput().type('password');
        termsInput().click();
        // then the user can click on the
        cy.get('button').click();
    })

    it('Check for form validation if an input is left empty',()=>{
        //all but nameInput filled,
        cy.get('button').should('be.disabled');
        emailInput().type('monica@gmail.com');
        pwInput().type('password');
        termsInput().click();
        // should not be able to click submit
        cy.get('button').should('be.disabled');
        //all but emailInput filled,
        nameInput().type('Monica');
        emailInput().clear();
        // should not be able to click submit
        cy.get('button').should('be.disabled');
        //all but pwInput filled,
        emailInput().type('monica@gmail.com');
        pwInput().clear();
        // should not be able to click submit
        cy.get('button').should('be.disabled');
        //all but term filled,
        pwInput().type('password');
        termsInput().click();
        // should not be able to click submit
        cy.get('button').should('be.disabled');
    })

}); // THIS IS THE CLOSING BRACKET FOR THE ENTIRE TEST