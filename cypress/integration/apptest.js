describe('Sanity Test', () => {
    

    it("evaluates to true", () => {
        expect(true).to.equal(true);
    })
});


describe('input submits when it meets validation expectations', () => {

    const email = "merrifield48@gmail.com";
    const name = "Aaron";
    const password = "Lollolol";
    let responseData;

    it("submits", () => {
        cy.server();
        cy.route({method: 'POST',
                  url: 'https://reqres.in/api/users'}).as("networkRequest");
        cy.visit('http://localhost:3000');
        cy.get('[data-cy=input-name]').focus().type(name);
        cy.get('[data-cy=input-email]').focus().type(email);
        cy.get('[data-cy=input-password]').focus().type(password);
        cy.get('[data-cy=input-TOS]').click();
        cy.get('[data-cy=submit-button]').click();

        cy.wait('@networkRequest').then(xhr => {
            responseData = xhr.response.body
        })
    })

    it("display the user", () => {
        cy.get(`[data-cy=user-component-${responseData.id}]`).children()
        .should('have.length', 2)
        .contains(name)
        .next()
        .contains(email)
    })

});

describe("input does not submit when it fails validation displays errors", () => {

    const email = "merrifield48@gmail.com";
    const password = "Lollolol";

    it("does not submit", () => {
       
        cy.get('[data-cy=input-email]').focus().type(email);
        cy.get('[data-cy=input-password]').focus().type(password);
        cy.get('[data-cy=input-TOS]').click();
        cy.get('[data-cy=submit-button]').click();
        cy.get('[data-cy=input-TOS]').click();
        cy.get('[data-cy=error-output]')
        .children()
        .contains("name is a required field")
        .next()
        .contains("name must be at least 3 characters")
    });
})