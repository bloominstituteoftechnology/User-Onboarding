// describe("New Hire App", () => {
//   beforeEach(() => {
//     cy.visit("/");
//   });
//   it("sanity check", () => {
//     //expect is an assertion
//     //we can have many assertions in a test
//     expect(2 + 2).to.equal(4);
//     expect(2 + 2).not.to.equal(5);
//   });

//   it("sanity check 2", () => {
//     expect([1, 2, 3].length).to.equal(3);
//   });

//   const textInput = () => cy.get('[name="text"]');
//   const firstNameInput = () => cy.get('[name="fname"]');
//   const lastNameInput = () => cy.get('[name="lname"]');
//   const emailInput = () => cy.get('[name="email"]');
//   const homeDepInput = () => cy.get('[id="departmentSelect"]');
//   const matCollection = () => cy.get('[name="termsConditions"]');
//   const submitButton = () => cy.get('[id="btn-id"]');
//   const editButton = () => cy.get('[id="edit-btn"]');
//   const deleteButton = () => cy.get('[id="delete-btn"]')

//   it("input fields rendering", () => {
//     firstNameInput().should("exist");
//     lastNameInput().should("exist");
//     emailInput().should("exist");
//     homeDepInput().should("exist");
//     matCollection().should("exist");
//   });

//   it("buttons rendering", () => {
//     submitButton().should("exist");
//     editButton().should("exist");
//     deleteButton().should("exist");
//   });

//       it("make sure we can add new hire", () => {
//         const first = "Jerome";
//         const last = "Morrow";
//         const email = "jerome.morrow1234@techwiz.tech";
//         const department = "Accounting and Executive";

//         firstNameInput().type(first)
//         lastNameInput().type(last)
//         emailInput().type(email)
//         homeDepInput().select(department)
//         matCollection().check()
//         submitButton().click()
//     })
// });
