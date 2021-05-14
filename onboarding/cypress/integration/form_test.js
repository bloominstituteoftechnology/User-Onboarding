describe('visit home page', () => {
  it('visits home page', () => {
    cy.visit('http://localhost:3000');
  });
});

describe('tests inputs', () => {
  const nameInput = () => cy.get('#name');

  const name = 'test name';
  const email = 'test@email.com';
  const password = 'testpassword';

  it('tests input', () => {
    cy.get('#name').should('exist');
    cy.get('#email').should('exist');
    cy.get('#password').should('exist');
  });

  it('can type text into input', () => {
    nameInput().type(name).should('have.value', name);
    cy.get('#email').type(email).should('have.value', email);
    cy.get('#password').type(password).should('have.value', password);

  });
});

describe('tests submit button', () => {
  it('')
})
