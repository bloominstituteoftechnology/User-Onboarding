import React, { useEffect, useState } from "react";
import "./index.css";
import * as yup from "yup";
import axios from "axios";

const Form = () => {
	let schema = yup.object().shape({
		name: yup.string().required("Name is required"),
		email: yup.string().email("E-Mail is required").required(),
		password: yup.string().required("Password is required"),
		terms: yup.boolean().oneOf([true], "terms is required"),
	});

	const [users, setUsers] = useState([]);

	const [formState, setFormState] = useState({
		name: "",
		email: "",
		password: "",
		terms: "",
	});

	const [errors, setErrors] = useState({
		name: "",
		email: "",
		password: "",
		terms: "",
	});

	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	useEffect(() => {
		schema.isValid(formState).then((valid) => {
			setIsButtonDisabled(!valid);
		});
	}, [formState]);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("https://reqres.in/api/users", formState)
			.then((response) => {
				setUsers(response.data);
				setFormState({
					name: "",
					email: "",
					password: "",
					terms: "",
				});
			})
			.catch((error) => console.log(error.response));
	};

	const handleChange = (e) => {
		e.persist();
		const newForm = {
			...formState,
			[e.target.name]:
				e.target.type === "checkbox" ? e.target.checked : e.target.value,
		};
		validateChange(e);
		setFormState(newForm);
		console.log(formState);
	};

	const validateChange = (e) => {
		yup
			.reach(schema, e.target.name)
			.validate(e.target.value)
			.then((valid) => {
				setErrors({ ...errors, [e.target.name]: "" });
			})
			.catch((err) => {
				setErrors({ ...errors, [e.target.name]: err.errors[0] });
			});

		console.log("errors :>> ", errors);
	};

	return (
		<form action="" onSubmit={handleSubmit}>
			<label htmlFor="name">
				name:
				<input
					type="text"
					name="name"
					onChange={handleChange}
					value={formState.name}
					data-cy="name"
				/>
				{errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
			</label>
			<label htmlFor="email">
				email:
				<input
					type="text"
					name="email"
					data-cy="email"
					onChange={handleChange}
					value={formState.email}
				/>
				{errors.email.length > 0 ? (
					<p className="error">{errors.email}</p>
				) : null}
			</label>
			<label htmlFor="password">
				password:
				<input
					type="text"
					name="password"
					data-cy="password"
					onChange={handleChange}
					value={formState.password}
				/>
				{errors.password.length > 0 ? (
					<p className="error">{errors.password}</p>
				) : null}
			</label>
			<label htmlFor="terms">
				terms and service:
				<input
					type="checkbox"
					name="terms"
					data-cy="terms"
					onChange={handleChange}
					value={formState.terms}
				/>
				{/* {errors.terms.length > 0 ? (
					<p className="error">{errors.terms}</p>
				) : null} */}
			</label>
			<pre>{JSON.stringify(users, null, 2)}</pre>
			<label htmlFor="submit">
				<input
					type="submit"
					name="submit"
					data-cy="submit"
					onChange={handleChange}
					disabled={isButtonDisabled}
				/>
			</label>
		</form>
	);
};

export default Form;
