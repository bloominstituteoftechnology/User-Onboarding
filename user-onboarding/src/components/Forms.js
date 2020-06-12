import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';


const formSchema = yup.object().shape({
	name: yup.string().required('Name is required field'),
	email: yup.string().email().required('You must include an email'),
	password: yup.string().required('Password is a required field'),
	role: yup.string(),
	experience: yup.string(),
	motivation: yup.string().required('must include why you would like to join'),
	terms: yup.boolean().oneOf([true], 'Please agree to terms of use'),
});

export default function Forms(){

  // managing state for our form inputs here

  const [formState, setFormState] = useState({
		name: '',
		email: '',
    password: '',
    role: '',
    experience: '',
    motivation: '',
		terms: '',
  });

  // what for state errors

  const [errors, setErrors] = useState({
		name: '',
		email: '',
		password: '',
		role: '',
		experience: '',
		motivation: '',
		terms: '',
	});

  // this is disabling the button until everything is correctly filled out
  
  const [buttonDisabled, setButtonDisable] = useState(true);

  // Each time the form value state is updated, check to see if it is valid per our schema.
  // this will allow us to enable/disable the submit button

  const [post, setPost] = useState([]);

 // we pass the entire state into the entire schema, no need to use reach here. 
 // we want to make sure it is all valid before we allow a user to submit isValid comes from Yup directly 

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisable(!valid);
    });
  }, [formState]);

  // we are now adding Reach in validateChange function. This will allow us to "reach" into the schema and test only one part.

  const validateChange = (e) => {
		yup
			.reach(formSchema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({
					...errors,
					[e.target.name]: '',
				});
			})
			.catch((err) => {
				setErrors({
					...errors,
					[e.target.name]: err.errors,
				});
			});
  };
  
  const formSubmit = (e) => {
		e.preventDefault();
		axios
			.post('https://reqres.in/api/users', formState)
			.then((res) => {
				setPost(res.data);
				console.log('success', post);

				setFormState({
					name: '',
					email: '',
					password: '',
					role: '',
					experience: '',
					motivation: '',
					terms: '',
				});
			})
			.catch((errors) => {
				console.log(errors.res);
			});
  };
  
  const inputChange = (e) => {
		e.persist();
		const newFormData = {
			...formState,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value,
		};
		validateChange(e);
		setFormState(newFormData);
	};

  return (
		<form onSubmit={formSubmit}>
			<label htmlFor="name">
				Name
				<input
					id="name"
					type="text"
					name="name"
					value={formState.name}
					onChange={inputChange}
				/>
				{errors.name.length > 0 ? (
					<p className="error">{errors.name}</p>
				) : null}
			</label>

			<label htmlFor="email">
				Email
				<input
					id="email"
					type="text"
					name="email"
					value={formState.email}
					onChange={inputChange}
				/>
				{errors.email.length > 0 ? (
					<p className="error">{errors.email}</p>
				) : null}
			</label>

			<label htmlFor="password">
				Password
				<input
					id="text"
					type="password"
					name="password"
					value={formState.password}
					onChange={inputChange}
				/>
				{errors.password.length > 0 ? (
					<p className="error">{errors.password}</p>
				) : null}
			</label>

			<label htlmFor="role">Role</label>
			<select
				id="role"
				name="role"
				value={formState.role}
				onChange={inputChange}
			>
				<option>Select</option>
				<option value="Android Developer">Android Developer</option>
				<option value="iOS Developer">iOS Developer</option>
				<option value="BackEnd Developer">BackEnd Developer</option>
				<option value="FrontEnd Developer">FrontEnd Developer</option>
				<option value="Full Stack Developer">Full Stack Developer</option>
				<option value="Data Science">Data Science</option>
			</select>

			<label htlmFor="experience">Experience</label>
			<select
				id="experience"
				name="experience"
				value={formState.experience}
				onChange={inputChange}
			>
				<option>Select</option>
				<option value="not applicable.">Not Applicable</option>
				<option value="iOS Developer">
					1 - Fundamental Awareness (basic knowledge)
				</option>
				<option value="	2 - novice (limited experience)">
					2 - Novice (limited experience)
				</option>
				<option value="3 - intermediate (practical application)">
					3 - Intermediate (practical application)
				</option>
				<option value="4 - advanced (applied theory)">
					4 - Advanced (applied theory)
				</option>
				<option value="5 - expert (recognized authority)">
					5 - Expert (recognized authority)
				</option>
			</select>

			<label htmlFor="motivation">
				Why are you interested in Lambda?
				<textarea
					id="motivation"
					name="motivation"
					value={formState.motivation}
					onChange={inputChange}
				/>
				{errors.motivation.length > 0 ? (
					<p className="error">{errors.motivation}</p>
				) : null}
			</label>

			<label htmlFor="terms">
				Terms and Conditions
				<input
					id="terms"
					type="checkbox"
					name="terms"
					checked={formState.terms}
					onChange={inputChange}
				/>
			</label>

			<pre>{JSON.stringify(post, null, 2)}</pre>
			<button disabled={buttonDisabled}>Submit</button>
		</form>
	);
};