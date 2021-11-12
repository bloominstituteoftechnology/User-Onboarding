describe('Form App', ()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:3000//');
    })

    
    
    //helpers
const nameInput = () =>cy.get('input[name=name]')
const emailInput = () => cy.get('input[name=email]');
const  passwordInput = () => cy.get('input[name=password]');
const tosInput = () => cy.get('input[name=tos]');
const submitBtn = () => cy.get('button[id="submitBtn"]');
const foobarInput = () => cy.get('input[name=foobar]');
const valErrors =() => cy.get('*[data-cy^="valErrors"]')
//end helpers

//sanity checks
it('sanity check! Make sure tests are working and Im not a caveman hitting this computer with a club', () =>{
    expect('blahblah').to.equal('blahblah')
    expect('3432').not.to.equal(3432);
    expect([]).not.to.equal({});
    expect({}).to.eql({}); 
})
//end sanity checks

it('make sure all my elements are showing', () =>{
    nameInput().should('exist');
    emailInput().should('exist');
    passwordInput().should('exist');
    tosInput().should('exist');
    submitBtn().should('exist');
    foobarInput().should('not.exist');
    valErrors().should('exist')

    cy.contains('Sell my data to Facebook').should('exist');
    cy.contains(/sell my data to Facebook/i).should('exist');
})

it('Does some inputs, checks name email and password', () =>{
    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost');
    })

    it('submit button starts out disabled', () => {
        submitBtn().should('be.disabled');
    })

    it('checks if we can type inputs, then tries to submit',() =>{
        nameInput()
            .should('have.value', '')
            .type('jifodajf')
            .should('have.value', 'jifodajf')
        
        emailInput()
            .should('have.value', '')
            .type('blahblah@gmail.com')
            .should('have.value', 'blahblah@gmail.com');
            
        passwordInput()
            .should('have.value'), ''
            .type('fjaasidfsd')
            .should('have.value', 'fjaasidfsd');

        tosInput()
            .click()
            .should('be.checked');
    })

    it('checks for validation errors', () =>{
        nameInput()
            .type('f');

        valErrors()
            .should('exist')
    })

})







})
