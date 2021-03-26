describe('user input',() =>{
    beforeEach(()=>{ 
        cy.visit('http://localhost:3001');

    })
    it('sanitiest to make sure it works', () =>{ 
        cy.get('input[name="username"]').should("exist")
        cy.get('input[name="email"]').should("exist")
        cy.get('input[name="password"]').should("exist")
        cy.get('input[name="term"]').should("exist")
        cy.get('button[id="btn"]').should("exist")
    })
    it('typing data', () =>{ 
        cy.get('input[name="username"]').should("have.value","").type("alexTran")
        cy.get('input[name="email"]').should("have.value","").type("alextran0899@gmail.com")
        cy.get('input[name="password"]').should("have.value","").type("Nopass")
        cy.get('input[name="term"]').click()
        cy.get('button[id="btn"]').click()
      
    })
    it('checking to see if its empty',()=>{
        cy.get('input[name="username"]').should("have.value","")
        cy.get('input[name="email"]').should("have.value","")
        cy.get('input[name="password"]').should("have.value","")
        cy.get('input[name="term"]').should("be.unchecked")
    })
})