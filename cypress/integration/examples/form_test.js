// - [ 1]  Get the `Name` input and type a name in it.
// - [ 2]  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
// - [ ]  Get the `Email` input and type an email address in it
// - [ ] Get the `password` input and type a password in it
// - [ ]  Set up a test that will check to see if a user can check the terms of service box
// - [ ] Check to see if a user can submit the form data
// - [ ] Check for form validation if an input is left empty


describe('Form App', ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000");
    })
    const nameInput = () => cy.get('input[name="name"]');
    const emailInput = () => cy.get('input[name="email"]');
    it ('sanity test', ()=>{
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(3);
    })

    //Parts 1 and 2 test.
   it('get the Name input and put a name in it', ()=>{
    nameInput().type('Monica')
    .should('have.value', "Monica");
    })

    //Part 3
    it("Get the `Email` input and type an email address in it", ()=>{
    emailInput().type('monica@gmail.com')
    });

}); // THIS IS THE CLOSING BRACKET FOR THE ENTIRE TEST