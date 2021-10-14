import React from 'react';
// import axios from 'axios';
// import App from './App'

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a friend</h2>

                {/* Submit button */}
                <button disabled={disabled}>SUMBIT</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>

                <label>Name:
                    <input 
                        type='text'
                        name='username'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>

                <label>Email:
                    <input
                        type='text'
                        name='email'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}

