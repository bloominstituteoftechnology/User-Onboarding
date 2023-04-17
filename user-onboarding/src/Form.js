import React from 'react'

export default function Form(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        {/* <h4>Click submit to add new member</h4>
        <button disabled={disabled}>submit</button> */}

        <div className='errors'>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>


      <div className='form-group inputs'>
        <h3>New Member Registration</h3>

        <label>First Name:
          <input
            value={values.first_name}
            onChange={onChange}
            name='first_name'
            type='text'
          />
        </label>

        <br></br>

        <label>Last Name:
          <input
            value={values.last_name}
            onChange={onChange}
            name='last_name'
            type='text'
          />
        </label>

        <br></br>

        <label>Email:
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <br></br>

        <label>Password:
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>
      </div>


      <div className='form-group checkboxes'>
        <h3>Our Terms of Service</h3>

        <label>I have read and accept the Terms of Service
          <input
            type='checkbox'
            name='termsOfService'
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
      </div>

      <div>
        <button disabled={disabled}>Create Account</button>
      </div>
    </form>
  )
}