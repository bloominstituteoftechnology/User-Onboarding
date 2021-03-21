describe('test block', () => {
    it('renders', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-top="134.59375"]').should('exist')
    })
    describe('username input', () => {
        it('username fill in', () => {
            cy.get('.username > :nth-child(1) > input').type('nick')
            cy.get('.email > label > input').type('nick@email.com')
        })
    })
    
})

