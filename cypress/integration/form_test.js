describe('Ensure form is working', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const welcomeSign = () => cy.get('h1');
    const nameInput = () => cy.get('input[name=username]');
    const nameLabel = () => cy.get('label[data-cy=username-label]')
    const emailInput = () => cy.get('input[name=email]');
    const emailLabel = () => cy.get('label[data-cy=email]')
    const passwordInput = () => cy.get('input[name=password]');
    const passwordLabel = () => cy.get('label[data-cy=password]');
    const tosInput = () => cy.get('input[name=tos]');
    const tosLabel = () => cy.get('label[data-cy=tos]')
    const submitButton = () => cy.get('button');


    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // === strict equality
        expect({}).to.eql({}); // == not strict equality
    })

    it('checks if proper elements are visible', () =>{
        welcomeSign().should('exist').contains('Welcome Aboard!');
        nameLabel().should('exist').contains('Name:');
        emailLabel().should('exist').contains('Email:');
        passwordLabel().should('exist').contains('Password:');
        tosLabel().should('exist').contains('Terms of Service:');
    })


describe('checks if inputs can be typed into and deleted', () =>{
    it('can navigate to the website', () => {
        cy.url().should('include', 'localhost')
    })
    it('checks to see if users can type into form', () => {
        nameInput()
        .should('have.value', '')
        .type('abc')
        .should('have.value', 'abc');

        emailInput()
        .should('have.value', '')
        .type('abc')
        .should('have.value', 'abc');

        passwordInput()
        .should('have.value', '')
        .type('abc')
        .should('have.value', 'abc');

    
    })
})
    



})