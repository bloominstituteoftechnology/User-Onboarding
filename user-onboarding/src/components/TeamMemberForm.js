import React from 'react';

export default function Form(props) {
	const { values, submit, change, disabled, errors } = props;

	const onChange = (evt) => {
		const { name, value, type, checked } = evt.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	return (
		<form onSubmit={onSubmit}>
			<div className='form-section general-info'>
				<h2>General Info</h2>
				{/* Name */}
				<label>
					Name:
					<input
						value={values.name}
						onChange={onChange}
						name='name'
						type='text'
					/>
				</label>

				{/* Username */}
				<label>
					Username:
					<input
						value={values.username}
						onChange={onChange}
						name='username'
						type='text'
					/>
				</label>

				{/* Email */}
				<label>
					Email:
					<input
						value={values.email}
						onChange={onChange}
						name='email'
						type='email'
					/>
				</label>

				{/* Password */}
				<label>
					Password:
					<input
						value={values.password}
						onChange={onChange}
						name='password'
						type='password'
					/>
				</label>
			</div>

			<div className='form-section department-info'>
				<h2>Department Info</h2>
				{/* Department */}
				<label>
					Department:
					<select
						onChange={onChange}
						value={values.department}
						name='department'
					>
						<option value=''>--Select a Department--</option>
						<option value='engineering'>Engineering</option>
						<option value='marketing'>Marketing</option>
						<option value='finance'>Finance</option>
					</select>
				</label>

				{/* Team */}
				<label>
					Team:
					<select onChange={onChange} value={values.team} name='team'>
						<option value=''>--Select a Team--</option>
						<option value='ios'>iOS</option>
						<option value='web'>Web</option>
						<option value='international-sales'>International Sales</option>
						<option value='influencer-partnerships'>
							Influencer Partnerships
						</option>
						<option value='venture-capital'>Venture Capital</option>
					</select>
				</label>

				{/* Supervisor */}
				<label>
					Supervisor:
					<input
						value={values.supervisor}
						onChange={onChange}
						name='supervisor'
						type='text'
					/>
				</label>

				{/* Location */}
				<label>
					Location:
					<select onChange={onChange} value={values.location} name='location'>
						<option value=''>--Select a Location--</option>
						<option value='los-angeles'>Los Angeles, CA</option>
						<option value='austin'>Austin, TX</option>
						<option value='chicago'>Chicago, IL</option>
						<option value='boston'>Boston, MA</option>
						<option value='london'>London, U.K.</option>
					</select>
				</label>
			</div>

			<div className='form-section agreements-checkbooxes submit'>
				{/* Terms of Service */}
				<label>
					<input
						type='checkbox'
						name='terms'
						checked={values.terms}
						onChange={onChange}
					/>
					Please agree to our Terms of Service.
				</label>

				{/* Privacy Policy */}
				<label>
					<input
						type='checkbox'
						name='privacy'
						checked={values.privacy}
						onChange={onChange}
					/>
					Please agree to our Privacy Policy.
				</label>
				{/* Privacy Policy */}
				<label>
					<input
						type='checkbox'
						name='gum'
						checked={values.gum}
						onChange={onChange}
					/>
					Check this box if you agree to work on the weekends with Trident
					Layers as a form of payment.
				</label>

				{/* validation errors */}
				<div className='errors'>
					<div>{errors.name}</div>
					<div>{errors.username}</div>
					<div>{errors.email}</div>
					<div>{errors.password}</div>
				</div>

				{/* submit button */}
				<button disabled={disabled}>Submit</button>
			</div>
		</form>
	);
}
