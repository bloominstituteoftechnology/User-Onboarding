import React from 'react';
import '../App.css';

export default function Form(props) {
    const {values, submit, change, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='formComponents' onSubmit={onSubmit}>
            <h1>Sign Up Form</h1>

            <div className='errorsDiv'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.term}</div>
            </div>

            <div className='formInputs'>
                <label>
                    Name
                    <input id='name-input' value={values.username} type='text' name='username' onChange={onChange}/>
                </label>
                <br/>

                <label>
                    Email
                    <input id='email-input' value={values.email} type='email' name='email' onChange={onChange}/>
                </label>
                <br/>

                <label>
                    Password
                    <input id='password-input' value={values.password} type='password' name='password'onChange={onChange}/>
                </label>
                <br/>

                <label>
                    Terms of Service
                    <input id='terms-cb' type='checkbox' name='term'/>
                </label>
                <br/>

                <button id='submit-button' disabled={disabled} type='submit'>Submit</button>
            </div>
        </form>
        
    )
}