import React from 'react';

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
  };

  const onChange = evt => {
    
    const { name, value } = evt.target
    change(name, value)
  };

  return (
    <form className='form-container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add User</h2>

        <button>Submit</button>

        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>
      </div>
      <div className='form-group inputs'>
        <h4>General Info</h4>
      </div>

      <div className='form-group checkboxes'>
        <h4>Terms of Service</h4>
        <label>Yes</label>
        <label>No</label>
      </div>
    </form>
  )
};