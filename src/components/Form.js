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
					<input type="checkbox" name="tos" onChange={onChange} />
				</label>

				<button disabled={submitDisabled}> Submit </button>
			</form>

			{/* validation errors */}
			<div>
				<p> {formErrors.name} </p>
				<p> {formErrors.email} </p>
				<p> {formErrors.password} </p>
				<p> {formErrors.tos} </p>
			</div>
		</div>
	);
};

export default Form;
