import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import * as yup from "yup";
import schema from "./validation/formSchema";

const initialFormValues = {
	name: "",
	email: "",
	password: "",
	tos: false,
};

const initialFormErrors = {
	name: "",
	email: "",
	password: "",
	tos: false,
};

//div for every user we input
const UserContainer = ({ obj }) => {
	return (
		<div className="user-container">
			<p>Name: {obj.name}</p>
			<p>Email: {obj.email}</p>
		</div>
	);
};

function App() {
	const [users, setUsers] = useState([]);

	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [submitDisabled, setSubmitDisabled] = useState(true);

	const onChangeHandler = (name, value) => {
		yup
			.reach(schema, name)
			.validate(value)
			.then(() => {
				setFormErrors({
					...formErrors,
					[name]: " ",
				});
			})
			.catch((err) => {
				setFormErrors({
					...formErrors,
					[name]: err.errors[0],
				});
			});
		setFormValues({ ...formValues, [name]: value });
	};

	const submitHandler = (e) => {
		const newUser = {
			name: formValues.name.trim(),
			email: formValues.email.trim(),
		};
		setUsers([...users, newUser]);
	};

	useEffect(() => {
		schema.isValid(formValues).then((valid) => {
			setSubmitDisabled(!valid);
		});
	}, [formValues]);

	return (
		<div className="App">
			{users.map((user, i) => {
				return <UserContainer key={i} obj={user} />;
			})}

			<Form
				formValues={formValues}
				formErrors={formErrors}
				submitHandler={submitHandler}
				submitDisabled={submitDisabled}
				onChangeHandler={onChangeHandler}
			/>
		</div>
	);
}

export default App;
