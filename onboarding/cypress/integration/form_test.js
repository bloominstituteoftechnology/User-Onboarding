const baseUrl = 'http://localhost:3000/';
const name = 'test name';
const email = 'test@email.com';
const password = 'testpassword';

describe('visit\'s the website', () => {
  it('should visit the website', () => {
    cy.visit(baseUrl);
  });
});

describe('working text boxes', () => {
  it('should allow text to be entered', () => {
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#password').type(password);
  });
});

describe('checks input', () => {
  it('checks that input holds previously entered information', () => {
    cy.get('#name').should('have.value', name);
    cy.get('#email').should('have.value', email);
    cy.get('#password').should('have.value', password);
  });
});

describe('tos button should be clickable', () => {
  it('should click 3x', () => {
    cy.get('#tos').click().click().click();
  });
});

describe('checks that submit is working', () => {
  it('should allow the user to click submit and submit their information', () => {
    cy.get('#submit').click();
  });
});
