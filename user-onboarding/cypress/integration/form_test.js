describe('Form Test', () => {
    beforeEach(()=> {
        cy.visit('http://localhost:3000');
    })

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosInput = () => cy.get('input[name=terms_of_service]');
    const submitBtn = () => cy.get('button[id="submit"]')

    //Sanity checks 
    it('Sanity checks to make sure that everything is working', () => {

        expect(1+1).to.equal(2);
        expect({}).not.to.equal({});
        expect(2+3).to.equal(5);
    })

    //Get the Name input and type a name in it.
    //Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)

    it('Type a name in name input fields',()=>{
        firstNameInput().should('exist');
        lastNameInput().should('exist');
        firstNameInput().type('Mike');
        lastNameInput().type('Wazowski');

        firstNameInput().should('have.value','Mike');
        lastNameInput().should('have.value','Wazowski')
    })
    // Get the Email input and type an email address in it

    it('Type an email address in email input',() => {
        emailInput().should('exist');
        emailInput().type('mikewazowski@monster.inc');

        emailInput().should('have.value','mikewazowski@monster.inc')
    })
    //Get the password input and type a password in it

    it('Type a password in password input field',() => {
        passwordInput().should('exist');
        passwordInput().type('1234$%^&^$%');

        passwordInput().should('have.value','1234$%^&^$%');
    })
    //Set up a test that will check to see if a user can check the terms of service box

    it('Check if user can check terms of service field',()=>{
        tosInput().should('exist');
        tosInput().should('not.be.checked');
        tosInput().check()

        tosInput().should('be.checked');
    })
    //Check to see if a user can submit the form data
    it('Check if user can submit the form data',()=> {
        firstNameInput().should('exist'); 
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        submitBtn().should('be.disabled');

        firstNameInput().type('Mike');
        lastNameInput().type('Sullivan');
        emailInput().type('mikesullivan@monster.inc');
        passwordInput().type('MikeIsTheBest');
        tosInput().check();

        submitBtn().should('not.be.disabled');

        submitBtn().click();

        cy.contains('Mike Sullivan').should('exist');

        firstNameInput().should('have.value','');
        lastNameInput().should('have.value','');
        emailInput().should('have.value','');
        passwordInput().should('have.value','');
        tosInput().should('not.be.checked');
        submitBtn().should('be.disabled');

    })

    //Check for form validation if an input is left empty
    it('Check if user can submit form if an input is left empty',()=> {
        firstNameInput().should('exist'); 
        lastNameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        submitBtn().should('be.disabled');

        
        lastNameInput().type('Sullivan');
        emailInput().type('mikesullivan@monster.inc');
        passwordInput().type('MikeIsTheBest');
        tosInput().check();

        submitBtn().should('be.disabled')
    })



})