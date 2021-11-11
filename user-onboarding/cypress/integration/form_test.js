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

    it('can type inputs',() =>{
        nameInput()
            .should('have.value', '');
    })


})







})
