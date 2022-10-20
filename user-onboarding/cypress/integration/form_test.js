describe("Onboarding App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const textInput = () => cy.get('input[name=name]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput= () => cy.get('input[name=password]')
    const tosInput= () => cy.get('input[name=tos]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');

    it("sanity check--does this work?", () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('proper elements are showing', () => {
        textInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        submitBtn().should('exist');
        })
describe('filling out the inputs/cancelling', () => {
    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost');
    })
    it('can type in the inputs', () =>{
        textInput()
            .should('have.value', '')
            .type('hello')
            .should('have.value', 'hello');
        emailInput()
            .should('have.value', '')
            .type('enhopkin')
            .should('have.value', 'enhopkin');        
        passwordInput()
            .should('have.value', '')
            .type('Geronimo')
            .should('have.value', 'Geronimo');
        
    })

})
    })
