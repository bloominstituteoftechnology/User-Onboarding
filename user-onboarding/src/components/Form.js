import React from 'react'


export default function Form(props) {
  const { change, values, submit, disabled, errors } = props;

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target;
    const newValue = type === 'checkbox' ? checked : value
    change(name, newValue)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input 
            type='text'
            name='name'
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={onChange}
          />
        </label>
        <label className='tos'>
          <input
            type='checkbox'
            className='checkbox'
            name='tos'
            onChange={onChange}
            checked={values.tos}
          />
          I agree to the Terms of Service
        </label>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
        <div className='submit'>
          <button disabled={disabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
