enum SiteInfo {
  Root = 'http://localhost:3000',
  InputFirstName = '[name="first_name"]',
  InputLastName = '[name="last_name"]',
  InputEmail = '[name="email"]',
  InputPassword = '[name="password"]',
  Checkbox = '[name="agreement"]',
}

enum TestInputs {
  FirstName = 'Bob',
  LastName = 'Dylan',
  Email = 'bob@dylan.com',
  Password = 'Test123',
}

describe('Basic Test', () => {
  it('Renders App', () => {
    cy.visit(SiteInfo.Root);
  });
});

describe('Types in name inputs', () => {
  it('First name Field is blank', () => {
    cy.get(SiteInfo.InputFirstName).should('have.value', '');
  });
  it('First name Field is blank', () => {
    cy.get(SiteInfo.InputLastName).should('have.value', '');
  });
  it('First name field is equal to Bob', () => {
    cy.get(SiteInfo.InputFirstName)
      .type(TestInputs.FirstName)
      .should('have.value', TestInputs.FirstName);
  });
  it('First name field is equal to Dylan', () => {
    cy.get(SiteInfo.InputLastName)
      .type(TestInputs.LastName)
      .should('have.value', TestInputs.LastName);
  });
});

describe('Types in email input', () => {
  it('Email Field is blank', () => {
    cy.get(SiteInfo.InputEmail).should('have.value', '');
  });
  it('Email field shows validates input is email', () => {
    cy.get(SiteInfo.InputEmail)
      .type(TestInputs.FirstName)
      .should('have.value', TestInputs.FirstName);

    cy.get(':nth-child(2) > .invalid-feedback').contains(
      'this must be a valid email'
    );
  });
  it('Email field is equal to Bob@dylan.com', () => {
    cy.get(SiteInfo.InputEmail)
      .type('{selectAll}{del}')
      .type(TestInputs.Email)
      .should('have.value', TestInputs.Email);
  });
});

describe('Types in password input', () => {
  it('Password Field is blank', () => {
    cy.get(SiteInfo.InputPassword).should('have.value', '');
  });
  it('Pasword field is equal to Test123', () => {
    cy.get(SiteInfo.InputPassword)
      .type(TestInputs.Password)
      .should('have.value', TestInputs.Password);
  });
});

describe('Checkmark on agreement', () => {
  it('Agreement is false', () => {
    cy.get('#terms').should('not.be.checked');
  });
  it('Agreement is true', () => {
    cy.get('#terms').check({ force: true }).should('be.checked');
  });
});
describe('Submittable', () => {
  it('not disabled', () => {
    cy.get('[type="submit"]').should('not.be.disabled');
  });
  it('No empty inputs', () => {
    cy.get(SiteInfo.InputFirstName).should('not.have.value', '');
    cy.get(SiteInfo.InputLastName).should('not.have.value', '');
    cy.get(SiteInfo.InputEmail).should('not.have.value', '');
    cy.get(SiteInfo.InputPassword).should('not.have.value', '');
    cy.get(SiteInfo.Checkbox).should('be.checked');
  });
});
