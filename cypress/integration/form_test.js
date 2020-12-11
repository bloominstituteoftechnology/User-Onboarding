describe("These are sample tests", () => {
    // function that runs test
    it("Renders our page to the screen" , () => {
        cy.visit("http://localhost:3000");
    });
    it("Makes a simple assertion", () => {
        // Assertion
       cy.get(".text-class")
    })
})
// describe("Name renders to DOM", () => {
//     beforeEach( () =>{
//         cy.visit("http://localhost:3000");
//     } )
//     it("Can navigate to site", () =>{
//         cy.url().should("include", "localhost");
//     })

//     // it("Get name input and type name", () =>{
       
        
//     //     cy.get("[data-cy=name-input]")
//     //     .should("have.value", "")
//     //     .type("My name is chicka chicka slim slady");
//     // })
// })