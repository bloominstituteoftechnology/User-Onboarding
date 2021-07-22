const form = props => {
	const { values, submit, change, disabled, errors } = props
	// console.log(values)
	const onChange = evt => {
		/* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
		const { name, value, type, checked } = evt.target
		const valueToUse = type === 'checkbox' ? checked : value
		console.log(valueToUse)
		// let valueToUse
		// if (type === 'checkbox') {
		//   valueToUse2 = checked
		// } else {
		//   valueToUse2 = value
		// }
		change(name, valueToUse)
	}

	const onSubmit = evt => {
		evt.preventDefault()
		submit()
	}

	return (
		<div className='form'>
			<form onSubmit={onSubmit}>
				<label>
					Name&nbsp;
					<input name='name' type='text' value={values.name} onChange={onChange} />
				</label>
				<label>
					Email&nbsp;
					<input name='email' type='text' value={values.email} onChange={onChange} />
				</label>
				<label>
					Password&nbsp;
					<input name='password' type='password' value={values.password} onChange={onChange} />
				</label>
				<div className='submitBox'>
					<div className='tos'>
						<label>
							Terms of Service
							<input type='checkbox' name='ToS' onChange={onChange} checked={values.ToS} />
						</label>
					</div>
					<button disabled={disabled}>Submit</button>
				</div>
			</form>
			<div className='errors'>
				{/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
				<div>{errors.name}</div>
				<div>{errors.email}</div>
				<div>{errors.ToS}</div>
				<div>{errors.password}</div>
			</div>
		</div>
	)
}
export default form
