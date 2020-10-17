describe('My second test', function() {
    it('visits my site', function(){
        cy.visit("index.html");
        cy.get('#container');
    })
})