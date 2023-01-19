describe('User onBoarding', () => {


    beforeEach(()=>{


        cy.visit('http://localhost:3000');
    })

    //Helpers
    const usernameInput = () => cy.get('input[name=username]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = ()=> cy.get('input[name=tos]')

    const createSub = () => cy.get('input[name=submit]')

    // Sanity
    it('Sanity test', () => {


        expect (2+2).to.equal(4);
    })

    // CI/CD
    it('the proper elements are showing', ()=>{
        usernameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        createSub().should('exist');
    })

    describe('Get the input and type a input',()=>{
        it('Can navigate to the website', ()=>{
            cy.url().should('include', 'localhost')
        })
        it('can type in a username', () => {
            usernameInput()
            .should('have.value', '')
            .type('Anthony')
            .should('have.value', 'Anthony')
        })
        it('can type in a email', ()=>{
            emailInput()
            .should('have.value', '')
            .type('jasman@gmail.com')
            .should('have.value', 'jasman@gmail.com')
        })
        it('can type in a password', ()=>{
            passwordInput()
            .should('have.value', '')
            .type('asdfgh678')
            .should('have.value', 'asdfgh678')
        })
        it('Can click the terms of service', ()=>{
            cy.get('[type=checkbox]').check()
        })
    })

    describe('Complete the whole form',()=>{
        it('Time to complete the form and clear it as well and also attaches new character to the dom', () => {
            usernameInput()
            .should('have.value', '')
            .type('Anthony')
            .should('have.value', 'Anthony')

            emailInput()
            .should('have.value', '')
            .type('jasman@gmail.com')
            .should('have.value', 'jasman@gmail.com')

            passwordInput()
            .should('have.value', '')
            .type('asdfgh678')
            .should('have.value', 'asdfgh678')

            cy.get('[type=checkbox]').check()

            createSub().click()
        })
    })


describe('fills form then deletes the conent' ,() => {
    it('Time to do it', ()=>{

        usernameInput()
        .should('have.value', '')
        .type('Anthony')
        .should('have.value', 'Anthony')
        .clear()
        .should('have.value', '')

        emailInput()
        .should('have.value', '')
        .type('jasman@gmail.com')
        .should('have.value', 'jasman@gmail.com')
        .clear()
        .should('have.value', '')

        passwordInput()
        .should('have.value', '')
        .type('asdfgh678')
        .should('have.value', 'asdfgh678')
        .clear()
        .should('have.value', '')

        cy.get('[type=checkbox]')
        .check()
        .uncheck()


    })






})


})