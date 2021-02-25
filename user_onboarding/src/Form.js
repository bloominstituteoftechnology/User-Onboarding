import React from 'react';

export default function Form(props){
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
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
      }
    
    return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
    
    <div className='errors'>
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.tos}</div>
    </div>
    
        </div>

        <div className='form-group inputs'>
        <h3>New User Registration</h3>

        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name&nbsp;
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

        <div className='form-group checkboxes'>
        <h3>Terms of Service</h3>

        {/* ////////// CHECKBOXES ////////// */}
        <label>Accept Terms of Service
            <input 
            type='checkbox'
            name='tos'
            onChange={onChange}
            checked={values.tos}
            />
        </label>
        </div>
        <div className='form-group submit'>
        <button disabled={disabled}>submit</button>
        </div>
    </form>
    )
}