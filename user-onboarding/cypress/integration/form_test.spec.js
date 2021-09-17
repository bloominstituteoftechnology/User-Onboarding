describe('quotes app', () =>{

    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const firstNameInput = () => cy.get('input[name=first_name]');
    const lastNameInput = () => cy.get('input[name=last_name]');
    const submitBtn = () => cy.get('button[id=submitBtn]');
    const textInput = () => cy.get('input[name=text]');

    it('sanity check', () => {
        expect(1 + 2).to.equal(3);
    })



})