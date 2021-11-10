import React from 'react';

export default function UserForm(props) {
	const { 
		values, 
		submit, 
		change,
		disabled,
		errors,
		} = props

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
		<form onSubmit={onSubmit}>
			<div>
			<div className='errors'>
          		<div>{errors.username}</div>
          		<div>{errors.email}</div>
          		<div>{errors.termsOfService}</div>
        	</div>
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
			<label>Email
				<input
					value={values.email}
					onChange={onChange}
					name='email'
					type='email'
				/>
			</label>
			<label>Password
				<input
					value={values.password}
					onChange={onChange}
					name='password'
					type='password'
				/>
			</label>
			<label>Terms of Service
				<input
					type='checkbox'
					name='termsOfService'
					onChange={onChange}
					checked={values.termsOfService}
				/>
			</label>
			<br />
			<button disabled={disabled}>submit</button>
			</div>
		</form>
	);
}