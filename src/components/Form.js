import React from "react";

const Form = (props) => {
	const {
		formValues,
		formErrors,
		submitHandler,
		submitDisabled,
		onChangeHandler,
	} = props;

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const valueToUse = type === "checkbox" ? checked : value;
		onChangeHandler(name, valueToUse);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			name: formValues.name.trim(),
			email: formValues.email.trim(),
		};
		submitHandler();
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label className="name">
					{" "}
					Name:
					<input
						type="text"
						name="name"
						value={formValues.name}
						onChange={onChange}
					/>
				</label>

				<label>
					{" "}
					Email:
					<input
						type="text"
						name="email"
						value={formValues.email}
						onChange={onChange}
					/>
				</label>

				<label>
					{" "}
					Password:
					<input
						type="password"
						name="password"
						value={formValues.password}
						onChange={onChange}
					/>
				</label>

				<label>
					{" "}
					Terms of service
					<input type="checkbox" name="tos" />
				</label>

				<button> Submit </button>
			</form>
		</div>
	);
};

export default Form;
