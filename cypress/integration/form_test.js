describe('NewForm', () => {
    beforeEach(() => cy.visit('baseUrl":"http://localhost:8080/'))
    describe('filling and submitting', () => {
        it('can type and see the correct name', () => {
            cy.get('input[name=name]')
             .type('Ken Kaneki')
             .should('have.value', 'Ken Kaneki')

             cy.get('input[name=email]').type('KennyCoffee@Anteiku.com')

            cy.get('input[name=password]').type('password').click()
            cy.get('input:invalid').should('have.length', 6)
            cy.get('#password').then(($input) => {
              expect($input[0].validationMessage).to.eq('this field is required')})
            cy.get('[type=terms]').check()

            cy.get('button').submit().click()

})
    describe('Filling inputs and cancelling', () => {

        it('submit button disabled', () => {

    cy.get('button').submit().should('be.disabled')})
    })
})
})