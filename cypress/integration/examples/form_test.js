import createValidation from "yup/lib/util/createValidation";

describe("Quotes app", () => {
    beforeEach(() => {
        // arbitrary code we want running before our tests run
        cy.visit("http://localhost:3000/");
      });
      const nameInput = ()=> cy.get('input[name = "name"]');
      const emailInput = ()=> cy.get('input[name="email"]');
      const password = ()=> cy.get('input[name = "password"]');
      const checkbox = ()=> cy.get('input[name = "terms"]');
      const submitBtn = ()=>cy.get('button');

        it("can type in the inputs", () => {

            nameInput().should("have.value", "")
            .type("Lisa Simpson")
            .should("have.value","Lisa Simpson");
            
            emailInput()
            .should("have.value", "")
            .type("LisaSimpson@Simpsons.com")
            .should("have.value","LisaSimpson@Simpsons.com");

            password()
            .should("have.value", "")
            .type("vneu2Inu2m")
            .should("have.value","vneu2Inu2m");

            checkbox()
            .check()
            
            submitBtn().click();
            
        });

        it("submit button is disabled until all inputs are filled out", () => {
        
            submitBtn().should("be.disabled");
            nameInput().type("Bart Simpson");
            submitBtn().should("be.disabled");
            nameInput().clear();

            emailInput().type("BartSimpson@Simpsoms.com");
            submitBtn().should("be.disabled");
            emailInput().clear();

            password().type("ncuNI2i3");
            submitBtn().should("be.disabled");
            password().clear();

            checkbox().check();
            submitBtn().should("be.disabled");
            checkbox().click();

            nameInput().type("Bart Simpson");
            submitBtn().should("be.disabled");
            emailInput().type("BartSimpson@Simpsoms.com");
            submitBtn().should("be.disabled");
            password().type("ncuNI2i3");
            submitBtn().should("be.disabled");
            checkbox().check();
            submitBtn().should("not.be.disabled");









        
        });





    });