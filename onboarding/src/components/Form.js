import React from 'react'
import '../App.css'
export default function UserForm(props){
    const{
      values,
      submit,
      change,
      disabled,
      errors,  
    }= props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name,  value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group'>
                <h2>Add User</h2>
                <button  className='submit' disabled={disabled}>Submit</button>

                <div>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.agree}</div>

                </div>
            </div>

<div className='form-group'>
    <h4>General Info about User</h4>
    <label>Name&nbsp;
        <input className='input'
        value={values.first_name}
        onChange={onChange}
        name='first_name'
        type='text'
        />
    </label>
    <label >email&nbsp;
        <input className='input'
        value={values.email}
        onChange={onChange}
        name='email'
        type='text'
        />
    </label>
    <label >Password&nbsp;
    <input className='input'
        value={values.password}
        onChange={onChange}
        name='password'
        type='text'
        />
    </label>
    <h4>Terms of Service</h4>
    <textarea>
    The rules a person or organization must observe in order to use a service. Generally legally binding unless it violates federal or local laws, the terms of service agreement (TOS) may change from time to time, and it is the responsibility of the service provider to notify its users of any such change. A website that provides only information or sells a product often does not have terms of service. However, Internet service providers (ISPs) and all websites that store personal data for a user do; in particular, social networking sites, online auctions and financial transaction sites.    
    </textarea>
    <label>Agree
    <input
          type='checkbox'
          name='agree'
          onChange={onChange}
          checked={values.agree}
          />
    </label>
    
</div>
        </form>
    )
}