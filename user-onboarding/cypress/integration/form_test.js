describe('User Onboarding App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('sanity test', () => {
    expect(1 + 2).to.equal(3);
  });

  const nameInput = () => cy.get('input[name=name]');

  it('can type name in nameInput area', () => {
    nameInput()
      .should('exist')
      .type('Juan Ruiz')
      .should('have.value', 'Juan Ruiz');
  });

  const emailInput = () => cy.get('input[name=email]');

  it('can type email in emailInput area', () => {
    emailInput()
      .should('exist')
      .type('juancruizcruz@gmail.com')
      .should('have.value', 'juancruizcruz@gmail.com');
  });

  const passwordInput = () => cy.get('input[name=password]');

  it('can type password in passwordInput area', () => {
    passwordInput().should('exist').type('12345').should('have.value', '12345');
  });

  const roleSelect = () => cy.get('input[name=status]');

  it('role can be selected from dropdown', () => {
    roleSelect()
      .should('have.value', '')
      .select('Designer')
      .should('have.value', 'Designer');
  });
});
