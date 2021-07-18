describe('form validation', () => {
	it('is valid', () => {
		cy.visit('localhost:3000')
	})
	it('makes sure form displays', () => {
		cy.get('input[name=name]').should('exist')
		cy.get('input[name=email').should('exist')
		cy.get('input[name=password').should('exist')
		cy.get('input[name=passwordConfirm').should('exist')
		cy.get('input[name=terms]').should('exist')
		cy.get('button[type=submit]').should('exist')
	})
	it('takes in inputs', () => {
		cy.get('input[name=name]').type('Steve Rivera')
		cy.get('input[name=email]').type('test@test.com')
		cy.get('input[name=password]').type('testpw')
		cy.get('input[name=passwordConfirm]').type('testpw')
		cy.get('input[name=terms]').check()
		cy.get('input[name=terms]').should('be.checked')
	})
	it('form can submit', () => {
		cy.get('form').submit()
	})
	it('form cannot submit', () => {
		cy.get('input[name=name]').should('have.value', '')
		cy.get('form').submit('be.disabled')
	})

})


