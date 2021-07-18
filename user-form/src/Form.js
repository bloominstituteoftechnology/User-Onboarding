import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

function Form() {

	const [user, setUser] = useState([])

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
		passwordConfirm: yup.string().oneOf([yup.ref("password"), null],"Passwords must match"),
		terms:yup.boolean().oneOf([true], 'Please Agree to the Terms & Conditions').required()
	})

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			console.log("valid?", valid)
			setDisableButton(!valid)
		})
	})

	//this function validates input and displays errors
	const validateData = (event) => {
		yup
			.reach(formSchema, event.target.name)
			.validate(event.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[event.target.name]: ""
				})
			})
			.catch((err) => {
				setErrors({...errors, [event.target.name]: err.errors[0]})
			})
	}

	//this controls the inputchange based on the type of input
	const inputChange = event => {
		//newformdata takes in what we type into input
		//then makes a copy of formstate and makes a new state. 
		//then we make setformstate into that new state we made and tada! 
		event.persist()
		const newFormData = {
			...formState,
			[event.target.name]:
				event.target.type === "checkbox" ? event.target.checked : event.target.value
		};
		validateData(event)
		setFormState(newFormData)
	}

	//this makes a POST request to a test server and then saves that data into user state
	const formSubmit = (e) => {
		e.preventDefault()
		axios
			.post("https://reqres.in/api/users", formState)
			.then((res) => {
				setUser(res.data)
				setFormState({
					name: "",
					email: "",
					password: "",
					passwordConfirm:"",
					terms:""
				})
		})
		
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
			{errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
			</label>

			<label htmlFor="email">Email
				<input 
					onChange={inputChange}
					type="email"
					name="email"
					id="email"
					value={formState.email} />
			{errors.email.length > 0 ? <p className="error">{errors.email}</p> : null}
			</label>

			<label htmlFor="password">Password
				<input 
					onChange={inputChange}
					type="password"
					name="password"
					id="password"
					value={formState.password} />
			{errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
			</label>

			<label htmlFor="passwordConfirm">Confirm Password
				<input
					onChange={inputChange}
					type="password"
					name="passwordConfirm"
					id="passwordConfirm"
					value={formState.passwordConfirm} />
				{formState.passwordConfirm.match(formState.password) ? null : <p className="error">{errors.passwordConfirm}</p>}
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
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</form>
	)
}





export default Form