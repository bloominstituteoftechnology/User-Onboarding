describe("Testing form inputs", () => {
	beforeEach(() => {
		cy.visit("localhost:3003");
	});

	it("adding text to inputs and submits the form", () => {
		cy.get('[data-cy="name"]').type("Jim").should("have.value", "Jim");
		cy.get('[data-cy="email"]')
			.type("Jim@jim.com")
			.should("have.value", "Jim@jim.com");
		cy.get('[data-cy="password"]')
			.type("123456")
			.should("have.value", "123456");
		cy.get('[data-cy="terms"]').check().should("be.checked");
		cy.get('[data-cy="submit"]').click();
	});
});
