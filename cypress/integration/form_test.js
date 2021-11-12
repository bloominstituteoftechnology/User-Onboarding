describe('App', ()=>{
	//start wuth freh state
	beforeEach(()=>{
		cy.visit('http://localhost:3000/');
	}) 

	//help
	const firstInput=()=>cy.get('input[name=first_name]');
	const lastInput = ()=>cy.get('input[name=last_name]');
	const emailInput=()=>cy.get('input[name=email]');
	const passwordInput = ()=>cy.get('input[name=password]');
	const tosInput = ()=>cy.get('[type="checkbox"]');
	const submitBtn = ()=>cy.get('button[id="submitBtn"]');

	it('sanity check to make sure tests work', ()=>{
		// it is a test
		//'expect' is assertion
		//there can be multiple assertions
		// buyt they must all relate to tjhe 'one thing' we're testsing
		expect(1 + 2).to.equal(3);
		expect(2+2).not.to.equal(5);
		expect({}).not.to.equal({}); //===
		expect({}).to.eql({}); // ==
	})

	it('checks first and last name input', ()=>{
		firstInput().should('exist');
		lastInput().should('exist');
		emailInput().should('exist');
		passwordInput().should('exist');
		tosInput().should('exist');
		submitBtn().should('exist');
	})

	describe('filling out the inputs', ()=>{
		it('can navi to the site', ()=>{
			cy.url().should('include', 'localhost');
		})

		it('submit button starts disabled', ()=>{
			submitBtn().should('be.disabled');
		})

		it('can type in the inputs', ()=>{
			firstInput()
				.should('have.value', '')
				.type('Anthony')
				.should('have.value', 'Anthony');
			lastInput()
				.should('have.value', '')
				.type('Coman')
				.should('have.value', 'Coman');
			emailInput()
				.should('have.value', '')
				.type('coman@yahoo.com')
				.should('have.value', 'coman@yahoo.com');
			passwordInput()
				.should('have.value', '')
				.type('1234')
				.should('have.value', '1234');
			tosInput()
				.check()
				.should('have.value', 'on')
		})

		it('the submit button enables when both inputs are filled out', ()=>{
			firstInput().type('Anthony')
			lastInput().type('Coman')
			emailInput().type('coman@yahoo.com')
			passwordInput().type('1234')
			tosInput().check()
			submitBtn().should('not.be.disabled');
		})
	})

	describe('Adding new User', ()=>{
		it('can submit new user', ()=>{
			firstInput().type('Larry');
			lastInput().type('The Cable Guy');
			emailInput().type('larry@cable.com');
			passwordInput().type('5678');
			tosInput().check();
			submitBtn().click();
			cy.contains('The Cable Guy').should('exist');
		})
	})
})