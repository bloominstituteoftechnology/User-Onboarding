describe('Form app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/new');
    })

    const textInput = () => cy.get('input[name="firstName"]');
    const emailInput = () => cy.get('input[name="email"]');
    const passwordInput = () => cy.get('input[name="password"]');
    const checkboxInput = () => cy.get('input[name="termsOfService"]')
    const submitBtn = () => cy.get("input[name='submit']");

    it('sanity check to make sure tests work', () => {
        // "it" is a test
        // "expect" is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // strict ===
        expect({}).to.eql({}); // not strict ==
    })


    it('the proper elements are showing', () => {
       textInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        checkboxInput().should('exist');
        submitBtn().should('exist');
    })



    describe('Filling out the inputs and cancelling', () => {
    
    it('can navigate to the url', () => {
           cy.url().should('include', 'localhost');
        })

        
       

        
       it('can type in the inputs', () => {
            textInput()
               .should('have.value', '')
                .type('cheyenne done it!')
               .should('have.value', 'cheyenne done it!');
            emailInput()
                .should('have.value', '')
                .type('123@hotmail.com')
               .should('have.value', '123@hotmail.com');
            passwordInput()
                .should('have.value', '')
                .type('123web')
               .should('have.value', '123web');
            
       })


       it('can check checkbox tos', ()=>{
        checkboxInput()
            .check()
       })


       it('can submit a form',()=>{
           submitBtn()
           .click()
       })

       //it('check valitidy', ()=>{
       // textInput()
       // .invoke('val')
       // .should('not.be.empty');
       //})

    })




})