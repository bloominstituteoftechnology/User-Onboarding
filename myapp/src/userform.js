import React from 'react'

export default function UserForm(props) {
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
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Sucker</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.card}</div>
          <div>{errors.num3}</div>
          <div>{errors.terms}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

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

        <label>Password&nbsp;
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='password'
          />
        </label>

        <label>Credit/Debit Card Number&nbsp;
          <input
            value={values.card}
            onChange={onChange}
            name='card'
            type='text'
          />
        </label>

        <label>3 Numbers on the back&nbsp;
          <input
            value={values.num3}
            onChange={onChange}
            name='num3'
            type='text'
          />
        </label>
      </div>

      <div className='ToS checkbox'>
        <h4>Terms of Service</h4>

        <label>
          <input
            type="checkbox"
            name="terms"
            onChange={onChange}
            checked={values.terms}
          />
        </label>By checking the box, you agree to give your soul to Hughes Pham
      </div>
    </form>
  )
}
