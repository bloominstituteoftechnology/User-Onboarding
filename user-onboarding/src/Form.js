import React from 'react'

export default function Form(props) {
  const {values,submit,change,disabled,errors,} = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    /* 🔥 LET'S SPECIFY SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add User</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.Agree}</div>
          <div>{errors.Disagree}</div>
          <div>{errors.Skip}</div>
        </div>
      </div>

      <div className='form-groupInputs'>
        <h4>USER'S INFORMATION</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Email&nbsp;
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='email'
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
        
      </div>

      <div className='form-groupcheckboxes'>
        <h4>TermsOfService</h4>

    
        {/* ////////// CHECKBOXES ////////// */}
        <label>Agree
          <input 
            type='checkbox'
            name='Agree'
            onChange={onChange}
            checked={values.Agree}
          />
        </label>

        <label>Disagree
          <input 
              type='checkbox'
              name='Disagree'
              onChange={onChange}
              checked={values.Disagree} 
            />
        </label>

        <label>Don't Care
          <input 
              type='checkbox'
              name='Skip'
              onChange={onChange}
              checked={values.Skip} 
            />
        </label>
      </div>
    </form>
  )
}