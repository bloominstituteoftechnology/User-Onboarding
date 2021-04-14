import React from "react";

const Form = (props) => {
	const {
		user,
		formValues,
		formErrors,
		submitDisabled,
		onChangeHandler,
	} = props;

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		const valueToUse = type === "checkbox" ? checked : value;
		onChangeHandler(name, valueToUse);
	};

	return (
		<div>
			<form>
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
