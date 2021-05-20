describe('User OnBoarding Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:59952')
    })


    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('proper elements are showing', () => {
        const submitBtn = () => cy.get('button[id=submitBtn]')
    })


})