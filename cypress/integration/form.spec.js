// write tests here
describe('User Onboarding App', () => {
beforeEach(() => {
    cy.visit(`http://localhost:3000`);
})

//Setting up testing variables
const nameInput = () => cy.get(`input[name=name]`);
const emailInput = () => cy.get(`input[name=email]`);
const passInput = () => cy.get(`input[name=password]`);
const fakeInput = () => cy.get(`input[name=fake]`);
const tosInput = () => cy.get('input[type=checkbox');
const submitBtn = () => cy.get(`input[type=submit]`);
const errors = () => cy.get(`div[class=errors]`);


//Sanity Check
it(`Sanity check to make sure I hooked this up correct`, () => {
    expect(1+2).to.equal(3);
})

it('can navigate to the site', () => {
    cy.url().should('include', 'localhost');
})

it(`Make sure things are displaying properly`, () => {
    submitBtn().should('exist');
    fakeInput().should('not.exist');
})

//the tests
describe('Tests for Input', () => {
    it(`Name text box can be written in`, () => {
        nameInput().should('have.value', '').type('test name').should('have.value', 'test name');
    })
    it(`Email text box can be written in`, () => {
        emailInput().should('have.value', '').type('email@email.com').should('have.value', 'email@email.com');
    })
    it(`Password text box can be written in`, () => {
        passInput().should(`have.value`, '').type('testpassword').should('have.value', 'testpassword');
    })
    it(`TOS checkbox can be checked`, () => {
        tosInput().check().should('be.checked', true).check().should('be.checked', false);
    })
})
describe(`Tests for errors`, () => {
    it(`Name input errors show up`, () => {
        nameInput().type('bogus').clear();
        errors().should('exist');
    })
    it(`Email input error shows up`, () => {
        emailInput().type('bogus').clear();
        errors().should('exist');
    })
})

})