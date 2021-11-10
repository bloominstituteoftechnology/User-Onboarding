import React from 'react';

export default function UserForm(props) {
	const { values, submit, change } = props;

	const onChange = evt => {
		const { name, value, checked, type } = evt.target;
		const realValue = type === 'checkbox' ? checked : value;
		change(name, realValue);
	}
	const onSubmit = evt => {
		evt.preventDefault();
		submit();
	}
	return (
		<div>
			<h3>Please give us all of your personal information</h3>
			<label>First name
				<input
					value={values.first_name}
					onChange={onChange}
					name='first_name'
					type='text'
				/>
			</label>
			<label>Last name
				<input
					value={values.last_name}
					onChange={onChange}
					name='last_name'
					type='text'
				/>
			</label>
			<label>email
				<input
					value={values.email}
					onChange={onChange}
					name='email'
					type='email'
				/>
			</label>
			<label>Terms of Service
				<input
					type='checkbox'
					name='termsOfService'
					onChange={onChange}
					checked={values.service}
				/>
			</label>
			<br />
			<button>submit</button>
		</div>
	);
}