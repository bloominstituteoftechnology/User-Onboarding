describe('Form Test', function(){
    it ('tests the required parameters for MVP', function(){
        cy.visit("index.html");
        cy.get('#name').type('Brittany').should('have.value', 'Brittany');
        cy.get('#email').type('asdf@123.com');
        cy.get('#password').type('1324');
        cy.get('#terms').check();
        cy.get('#submit').click();
       
    })
})