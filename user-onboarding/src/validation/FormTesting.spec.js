// installing cypress was a Witch and a half plus my slow internet didnt help 
//so im just going to write down how i think it would go if everything if life went my way

describe('Quotes App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    const username = () => cy.get('input[name=username]');
    const email = () => cy.get('input[name=email]');
    const password = () => cy.get('input[name=password]');
    const tos = () => cy.get('checkbox[name=tos]');

    it('the proper elements are showing', () => {
        username().should('exist');
        email().should('exist');
        password().should('exist');
        tos().should('exist');
      })
    

})