describe('User OnBoarding Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })


    it('check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    const submitBtn = () => cy.get('button[id=submitBtn]')

    it('proper elements are showing', () => {
        submitBtn().should('exist')
    })

})