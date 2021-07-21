import React from 'react'

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
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add User</h2>
                <button disabled={disabled}>Submit</button>

                <div>
                    <div>{errors.first_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

<div>
    <h4>General Info about User</h4>
    <label>Name&nbsp;
        <input
        value={values.first_name}
        onChange={onChange}
        name='first_name'
        type='text'
        />
    </label>
    <label>email
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
    <label>Disagree
    <input
          type='checkbox'
          name='disagree'
          onChange={onChange}
          checked={values.disagree}
          />
    </label>
</div>
        </form>
    )
}