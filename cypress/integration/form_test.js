describe('User OnBoarding Testing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

const inputName = () => cy.get(`input[id="fullname"]`);
const inputEmail = () => cy.get(`input[id="email"]`);
const inputPswd = () => cy.get(`input[id="password"]`);
const selectCheck = () => cy.get(`[type="checkbox"]`);
const submitBtn = () => cy.get(`button[id="submit"]`);

describe('typing into the input and submitting', () => {
    inputName().type('Greyson Hamilton');
    inputName().should('have.value', 'Greyson Hamilton');
    inputEmail().type('greysonhamilton752@gmail.com');
    inputPswd().type('Beauty');
    selectCheck().check(terms);
    selectCheck().should('be.checked');
    submitBtn().click();
    cy.contains('Greyson Hamilton').should('exist');
})

describe('validation of form requirment', () => {
    submitBtn().click();
    inputName().type('Greyson Hamilton');
    submitBtn().click();
    inputEmail().type('greysonhamilton752@gmail.com');
    submitBtn().click();
    inputPswd().type('Beauty');
    submitBtn().click();
    selectCheck().check();
    submitBtn().click();
})
});