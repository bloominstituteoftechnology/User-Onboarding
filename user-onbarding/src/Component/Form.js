import React from 'react';


export default function Form (props){
    const {errors, values, submit, change, disabled} = props

    const onSubmit = evt =>{
        evt.preventDefault()
        submit()
    }

    const onChange = (evt)=>{
        const {name, value, type, checked} = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return(
        <form  className='form container'>
            <div className='user submit'>
                <h2>Add User</h2>  
            </div>
            <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.passwod}</div>
                <div>{errors.terms}</div>
            
            </div>
            <div>
                <label>Name
                    <input 
                    name='username'
                    type='text'
                    onChange={onChange}
                    value={values.username}
                    />
                </label>
            </div>
            
            <div>
                <label>Email
                    <input 
                    name='email'
                    type='text'
                    onChange={onChange}
                    value={values.email}
                    />
                </label>
            </div>
            
            <div>
                <label>Password
                    <input 
                    name='password'
                    type='text'
                    onChange={onChange}
                    value={values.password}
                    />
                </label>
            </div>
            
            <div>
                <label>Terms Of Service
                    <input 
                    name='terms'
                    type='checkbox'
                    onChange={onChange}
                    checked={values.terms}
                    />
                </label>
            </div>
            <button disabled={disabled}>Submit</button>
        </form>
    )

}