describe("User-Onboarding", () => {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	const nameInput = () => cy.get('input[name="name"]');
	const emailInput = () => cy.get('input[name="email"]');
	const passwordInput = () => cy.get('input[name="password"]');

	describe("name input", () => {
		it("gets the NAME INPUT and checks if the text inputted contains name", () => {
			nameInput().should("exist");
			nameInput().should("have.value", "");
		});
	});

	describe("email input", () => {
		it("gets EMAIL INPUT and types an email address in it", () => {
			emailInput()
				.should("have.value", "")
				.type("cypress@gmail.com // This email is inputted through Cypress.")
				.should(
					"have.value",
					"cypress@gmail.com // This email is inputted through Cypress.",
				);
		});
	});

	describe("password input", () => {
		it("gets PASSWORD INPUT and types a password in it", () => {
			passwordInput()
				.should("have.value", "")
				.type("password1234")
				.should("have.value", "password1234");
		});
	});
});
