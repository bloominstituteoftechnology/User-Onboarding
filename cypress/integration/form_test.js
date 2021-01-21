//write tests here//

const { iteratee } = require("lodash")


describe('Form App', () => {

    beforeEach( () => {
        cy.visit('/')
    })

    const nameInput = () => cy.get(':nth-child(1) > input')


    it('allows user to add new name in name field', () => {
        const personName = 'Cypress'
        nameInput().type(personName)
    })


})