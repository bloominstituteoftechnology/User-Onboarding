import React from 'react'

export default function userForm(props) {
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
    const useValue = type === 'checkbox' ? checked : value;
    change(name, useValue)
  }

  return (
    <form className='container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add User</h2>

        <button disabled={disabled}>submit</button>

        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form inputs'>

        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onChange}
            name='username'
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
        </div>

      <div className='form checkboxes'>
        <h4>Terms of Service</h4>

        <label>Terms of Service
          <input
            type='checkbox'
            name='TermsofService'
            checked={values.TermsofService}
            onChange={onChange}
          />
        </label>
      </div>
    </form>
  )
}