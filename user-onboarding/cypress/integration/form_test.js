describe('Form Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    const nameInput = cy.get('input[name="name"]');
    const emailInput = cy.get('input[name="email"]');
    const passwordInput = cy.get('input[name="password"]');
    const tosInput = cy.get('input[name="tos"]');
    const submitButton = cy.get('button');

    it('sanity test to make sure that test works', () => {
        expect(true).to.equal(true);
        expect(2+2).not.to.equal(5);
    });

    it('Get the "Name" input and type a name in it.', () => {
        nameInput().type('Justin Peczenij');
    });

})

