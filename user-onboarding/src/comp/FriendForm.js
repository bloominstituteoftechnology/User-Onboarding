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
    const { name, value } = evt.target

    change( name, value )
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Add a Friend</h2>

            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
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

        <label>password
        <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>
        <div className='terms-choice'>
            <h4>Terms of Service</h4>
        <label>yes
          <input
            type='radio'
            name='terms'
            value='yes'
            onChange={onChange}
            checked={values.terms === 'yes'}
          />
        </label>

        <label>no
          <input
            type='radio'
            name='terms'
            value='no'
            onChange={onChange}
            checked={values.terms === 'no'}
          />
        </label>
         </div>
        </div>

    </form>
  )
}