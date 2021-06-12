import React from 'react';
import '../App.css';

export default function Form(props) {
    const {values,submit, change, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value)
    }

    return (
        <form className='formComponents' onSubmit={onSubmit}>
            <div className='errorsDiv'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.term}</div>
            </div>
            <div className='formInputs'>
                <label>
                    Name
                    <input type='text' name='name' onChange={onChange}/>
                </label>

                <label>
                    Email
                    <input type='email' name='email' onChange={onChange}/>
                </label>

                <label>
                    Password
                    <input type='password' name='password'onChange={onChange}/>
                </label>

                <label>
                    Terms of Service
                    <input type='checkbox' name='term'/>
                </label>

                <button disabled={buttonDisabled}>Submit</button>
            </div>
        </form>
        
    )
}