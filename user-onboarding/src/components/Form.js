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
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add User</h2>
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsofservice}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name
          <input
            value={values.name}
            onChange={onChange}
            name='Name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>
        <label>Password
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>

        

        <h3>TERMS OF SERVICE</h3>
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Agree
          <input
            type="radio"
            name="termsofservice"
            value="agree"
            onChange={onChange}
            checked={values.civil === "agree"}
          />
        </label>

        <label>Decline
          <input
            type="radio"
            name="termsofservice"
            value="decline"
            onChange={onChange}
            checked={values.civil === "decline"}
          />
        </label>
      </div>
    </form>
  )
}