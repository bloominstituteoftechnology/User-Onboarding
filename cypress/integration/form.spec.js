

describe('Form', () => {
  
  beforeEach(() =>{
    cy.visit("http://localhost:3000/");
  })

  const nameInput = () => cy.get('input[name=name]');
  const emailInput = () => cy.get('input[name=email]');
  const passInput = () => cy.get('input[name=pass]');
  const tosInput = () => cy.get('input[name=tos]');
  const subButton = () => cy.get('button[id = submit]');

  it("mvp", function(){
    nameInput().type('Mike').should('have.value','Mike');
    emailInput().type('Mike@email.com');
    passInput().type('password');
    tosInput().click().should('have.value',"on");
    subButton().click();
    nameInput().should('have.value','');
    subButton().should('be.disabled');
  })
})