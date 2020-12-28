// tests here

describe("form app",()=>{

beforeEach(()=> {

cy.visit("http://localhost:3000")



})


const nameInput = () => cy.get('#name')
const emailInput = ()=> cy.get ('#email')
const passInput = () => cy.get (".password")
const button = () => cy.get('button')
const checkbox = () => cy.get("#check")





it("sanity checks", ()=>{

 expect(4).to.eql(4)
 expect({}).to.eql({})

})
it("proper elements exist", () =>{
nameInput().should("exist")
emailInput().should("exist")
passInput().should("exist")
button().should("exist")
checkbox().should("exist")

})
describe("filling out inputs and checking checkbox", ()=>{

    it("submit button is disabled on form at the begining", () =>{
        button().should("be.disabled")
    
   

    })
    it ("can type inside the inputs",()=>{
        nameInput()
        .should('have.value',"")
        .type("George")
        .should('have.value',"George" )
        emailInput()
        .should('have.value', "")
        .type("george@aol.com")
        .should('have.value',"george@aol.com")
        passInput()
        .should('have.value', "")
        .type("blue1920")
        checkbox().check()
        button().should("be.enabled")
        
})

it ("can type inside the inputs",()=>{
    nameInput()
    .should('have.value',"")
    .type("George")
    .should('have.value',"George" )
    emailInput()
    .should('have.value', "")
    .type("george@aol.com")
    .should('have.value',"george@aol.com")
    passInput()
    .should('have.value', "")
    .type("blue1920")
    checkbox().check()
    button().should("be.enabled")
    

})
it ("can type inside the inputs",()=>{
    nameInput()
    .should('have.value',"")
    .type("George")
    .should('have.value',"George" )
    emailInput()
    .should('have.value', "")
    .type("george@aol.com")
    .should('have.value',"george@aol.com")
   
    checkbox().check()
    button().should("be.disabled")
    
})
})
})