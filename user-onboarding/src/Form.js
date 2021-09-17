//this will be used for all form data?

import React from 'react';

export default function Form(props) {
    const { 
        values, 
        submit, 
        change,
        disabled, 
        errors,
     } = props

    //prevent default when submitting
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    //target values to use when change is made
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ?  checked : value;
        change (name, valueToUse);
    }

    return (
      <form className='form' onSubmit = {onSubmit}>
          <div className='form-grouping submit'> 
              <h2> Add Someone Here: </h2>
        
             <div className='errors'>
                <div> {errors.first_name}</div>
                <div> {errors.last_name}</div>
                <div> {errors.email}</div>
                <div> {errors.password}</div>
                <div> {errors.terms}</div>
             </div>
          </div>
        
      <div className='inputs form-grouping'>
          <div className='names'>
        <label> First Name: 
            <input 
                type='text'
                name='first_name'
                value={values.first_name}
                onChange={onChange}
            />
        </label>  
        <label> Last Name: 
            <input 
                type='text'
                name='last_name'
                value={values.last_name}
                onChange={onChange}
            /> 
        </label>
        </div>  
        <label className='email'> Email: 
            <input
               type='text'
               name='email'
               value={values.email}
               onChange={onChange}

            />
        </label>
        <label className='password'> Password: 
            <input
                type='text'
                name='password'
                value={values.password}
                onChange={onChange}

            />
        </label>
      </div>

        {/* CHECKBOX  CHECKBOX */}
    <div className='checkboxes form-grouping'>
        <label className='terms'> Terms of Use:
            <input 
                type='checkbox'
                name='terms'
                checked={values.terms}
                onChange={onChange}

            />
        </label>
       </div>

       <button id='submitBtn' disabled={disabled}> Submit </button>  {/* we will need to disable this?? øøøø */}

    </form>
    )
}

