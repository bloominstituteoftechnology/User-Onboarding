// write tests here
describe('Quotes App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    const textInput = () => cy.get('input[name=text]');
    const authorInput = () => cy.get('input[name=author]');
    const submitBtn = () => cy.get('button[id="submitBtn"]');
    const cancelBtn = () => cy.get('button[id="cancelBtn"]');
    const foobarInput = () => cy.get('input[name=foobar]');

    it('sanity check to make sure test work', () => {
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('the proper elements are showing', () => {
        textInput().should('exist');
        authorInput().should('exist');
        submitBtn().should('exist');
        cancelBtn().should('exist');
        foobarInput().should('not.exist');
    })
    describe('filling out the inputs and cancelling', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })
        it('submit button starts out disabled', () => {
            submitBtn().should('be.disabled');
        })

        it('can type in the input', () => {
            textInput()
            .should('have.value', '')
            .type('who likes css anyways?')
            .should('have.value', 'who likes css anyways?')

        authorInput()
        .should('have.value', '')
        .type('MWallace')
        .should('have.value', 'MWallace')
        })

        it('the submit button enables when both inputs are filled out', () => {
            textInput().type('i love css')
            authorInput().type('said no one ever')
            submitBtn().should('not.be.disabled')
        })

        it('the cancel button can reset the inputs and disable the submit button', () => {
            textInput().type('lorem ipsum')
            authorInput().type('dolar sit')
            cancelBtn().click();
            textInput().should('have.value', '')
            authorInput().should('have.value', '')
            submitBtn().should('be.disabled');
        })
    })

    describe('adding a new quote', () => {
        it('can submit and delete a new quote', () => {
            textInput().type('its better to burn out than fade away!')
            authorInput().type('neil young')
            submitBtn().click();

            cy.contains('its better to burn out than fade away!').next().next().click()
            cy.contains('its better to burn out than fade away!').should('not.exist')
        })

        it('variation of can submit a new quote', () => {
            cy.contains(/have fun/).should('not.exist')
            textInput().type('have fun')
            authorInput().type('Kei Wallace')
            submitBtn().click()
            cy.contains(/have fun/).should('exist')
            cy.contains(/have fun/).next().next().click()
            cy.contains(/have fun/).should('not.exist')
        })
    })
    describe('editing existing quote', () => {
        it('can edit a quote', () => {
            textInput().type('lorem ipsum')
            authorInput().type('MWallace')
            submitBtn().click()
            cy.contains('lorem ipsum').siblings('button:nth-of-type(1)').click()
            textInput().should('have.value', 'lorem ipsum')
            authorInput().should('have.value', 'MWallace')
            textInput().type(' dolor')
            authorInput().type(' Hehe')
            submitBtn().click()
            cy.contains('lorem ipsum dolor (MWallace Hehe)')
            cy.contains('lorem ipsum dolor (MWallace Hehe').next().next().click()
            cy.contains('lorem ipsum dolor (MWallace Hehe)').should('not.exist')
        })
    })
})