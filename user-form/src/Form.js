import React, { useState } from 'react'

function Form() {

	const [formState, setFormState] = useState({
		//this takes into account the 'name' of every input
		name: "",
		email: "",
		password: "",
		terms:""
	})

	//this controls the inputchange based on the type of input
	const inputChange = event => {
		//newformdata takes in what we type into input
		//then makes a copy of formstate and makes a new state. 
		//then we make setformstate into that new state we made and tada! 
		const newFormData = {
			...formState,
			[event.target.name]:
				event.target.type === "checkbox" ? event.target.checked : event.target.value
		}
		setFormState(newFormData)
	}

	const formSubmit = (e) => {
		e.preventDefault()
	}

	return (
		<form onSubmit={formSubmit}>
			<label htmlFor="name">Name:
				<input 
					onChange={inputChange}
					type="text"
					name="name"
					id="name"
					value={formState.name} />
			</label>

			<label htmlFor="email">Email
				<input 
					onChange={inputChange}
					type="email"
					name="email"
					id="email"
					value={formState.email} />
			</label>

			<label htmlFor="password">Password
				<input 
					onChange={inputChange}
					type="password"
					name="password"
					id="password"
					value={formState.password} />
			</label>

			<label htmlFor="terms" className="terms">
				<input 
					onChange={inputChange}
					type="checkbox"
					name="terms"
					id="terms"
					checked={formState.terms} />
					Terms of Service
			</label>
			<button type="submit">Submit</button>
			
		</form>
	)
}





export default Form