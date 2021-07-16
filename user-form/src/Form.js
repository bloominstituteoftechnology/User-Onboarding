import React, { useState, useEffect } from 'react'
import * as yup from 'yup'

function Form() {

	const [formState, setFormState] = useState({
		//this takes into account the 'name' of every input
		name: "",
		email: "",
		password: "",
		passwordConfirm:"",
		terms:""
	})

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		passwordConfirm:"",
		terms:""
	})
	const [disableButton, setDisableButton] = useState(true)

	//this schema handles the validation for my form
	const formSchema = yup.object().shape({
		name: yup.string().required("Please enter your name"),
		email: yup.string().email("Please enter a valid Email").required(),
		password: yup.string().required(),
		passwordConfirm: yup.string().oneOf([yup.ref("password"),null],"Passwords must match"),
		terms:yup.bool().oneOf([true],"Please Agree to Terms and Conditions").required()
	})

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			console.log("valid?", valid)
			setDisableButton(!valid)
		})
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

			<label htmlfor="passwordConfirm">Confirm Password
				<input
					onChange={inputChange}
					type="password"
					name="passwordConfirm"
					id="password"
					value={formState.passwordConfirm}
				
				/>
					
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
			<button disabled={disableButton} type="submit">Enroll</button>
			
		</form>
	)
}





export default Form