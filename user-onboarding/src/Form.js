//this will be used for all form data?

import React from 'react';


export default function Form(props) {
    const { values, submit, errors, disabled, change } = props

    //prevent default when submitting
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    //target values to use when change is made
    const onChange = evt => {
        const {type, name, value, checked } = evt.target;
        const valueToUse = type === 'checkbox' ?  checked: value;
        change (name, valueToUse);
    }

    return (
      <form className='form container' onSubmit={onSubmit}>
          <div className='form-grouping submit'> 
              <h2> Add Someone Here: </h2>
          
          
              <button disabled={disabled}> Submit </button>  {/* we will need to disable this?? øøøø */}

             <div className='errors'>
                <div> {errors.name}</div>
                <div> {errors.email}</div>
                <div> {errors.password}</div>
                <div> {errors.terms}</div>
             </div>
          </div>
        
        <div className='inputs form-grouping'>
        <label> Name: 
            <input 
                type='text'
                name='nameio'
                value={values.name}
                change={onChange}
            />
        </label>  
        <label className='email'> Email: 
            <input
               type='text'
               name='email'
               value={values.email}
               change={onChange}

            />
        </label>
        <label className='password'> Password: 
            <input
                type='text'
                name='password'
                value={values.password}
                change={onChange}

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
                change={onChange}

            />
        </label>
       </div>
      </form>
    )
}

