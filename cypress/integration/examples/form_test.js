describe('My First Test', function () {
    //act
        it('Does not do much', function() {
    //assert
            expect(true).to.equal(true);
        })
    })


    describe('My Second Test', function () {
        //Arrange
        it('Visits a new site', function() {
        // Act
        cy.visit("index.html");
        })
    })


    describe('Test our form inputs', function () {
        beforeEach(function (){
         cy.visit("index.html");
        });
         it('Adds text to inputs', function() {
         //cy.get('[name="username"]').type('e') // CHECKS IF I get an error if I type less than 4 characters for the username. The error check must be under the password.
         //cy.get('[name="username"]').clear() // clear out first name
        cy.get('[name="username"]').type("AnaTulea").should("have.value", "AnaTulea");
        cy.get('[name="password"]').type("mypass").should("have.value", "mypass");
        //cy.get('[name="password"]').clear()
        //cy.get('[name="password"]').type("my")
        //cy.get('[name="password"]').type("myasssssswoordddd")
       // cy.get('.errors').should('contain', 'Username must be 4 characters minimum')
       // cy.get('.errors').should('contain', 'User Name is required')
       // cy.get('.errors').should('be.visible')
        cy.get('[name="email"]').type("example@email.com").should("have.value", "example@email.com");
        //cy.get('.errors').should('contain', 'Password is required')
        //cy.get('.errors').should('contain', 'Password must be 6 characters minimum')
        //cy.get('.errors').should('contain', 'Too Long!')
        cy.get('[name="phoneNr"]').type('4329392221').should("have.value", '4329392221');
        cy.get('[name="profession"]').type('student').should("have.value", 'student');
        cy.get('[name="city"]').type('Chicago').should("have.value", 'Chicago');
        cy.get('[name="gender"]').select("female").should("be.value", "female");
        cy.get('[name="tos"]').check().should("be.checked");
        cy.get("form").submit();
     })
     })
     