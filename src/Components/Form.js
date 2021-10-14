import React from 'react'

export default function FriendForm(props) {
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
        <h2>Add a Friend</h2>
        <button disabled={disabled}>submit</button>
        <div className='errors'>
          <div>{errors.first_name}</div>
          <div>{errors.last_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.role}</div>
          <div>{errors.termsOfService}</div>
        </div>
      </div>
      <div className='form-group inputs'>
        <h4>General information</h4>
        <label>First Name
          <input
            value={values.first_name}
            onChange={onChange}
            name='first_name'
            type='text'
          />
        </label>
        <label>Last Name
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
            type='text'
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
        <label>Role
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='frodo'>Frodo</option>
            <option value='sam'>Sam</option>
          </select>
        </label>
      </div>
      <div>
        <label>Terms of Service
          <input
            type="checkbox"
            name="termsOfService"
            onChange={onChange}
            checked={values.termsOfService}
          />
        </label>
      </div>
    </form>
  )
}