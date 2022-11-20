describe("Unit Test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    //helpers
    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passInput = () => cy.get('input[name=password]');
    const tosBox = () => cy.get('input[name=tos]');
    const submitBtn = () => cy.get('button');

    it('Confirm getters', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passInput().should('exist');
        tosBox().should('exist');
        submitBtn().should('exist');
    })

    it('confirm input shows up', () => {
        nameInput()
            .should('have.value', "")
            .type('user1')
            .should('have.value', 'user1');
        emailInput()
            .should('have.value', "")
            .type('email@email.com')
            .should('have.value', 'email@email.com');
        passInput()
            .should('have.value', "")
            .type('123abc')
            .should('have.value', '123abc');
        tosBox()
            .click();
    })

    it('confirm submit button works', () => {
        nameInput()
            .should('have.value', "")
            .type('user1')
        emailInput()
            .should('have.value', "")
            .type('email@email.com')
        passInput()
            .should('have.value', "")
            .type('123abc')
        tosBox()
            .click()
        submitBtn()
            .click()
        cy.get("*[class^='user 0']")
            .then((text) => {
                expect(text.text()).to.match(/email@email.com/)
            })
    })

    it('confirm submit button requires tos', () => {
        nameInput()
            .should('have.value', "")
            .type('user1')
        emailInput()
            .should('have.value', "")
            .type('email@email.com')
        passInput()
            .should('have.value', "")
            .type('123abc')
        tosBox()
            .click()
            .click()
        cy.get('.form >:nth-child(4)')
            .then(err => {
            expect(err.text()).to.equal('you must accept the terms of service to proceed')
            })
        
    })

    it("sanity check", () => {
        expect(1+2).to.equal(3)
    })
})

