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
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked  : value;
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <h4>User Sign Up</h4>
                <label>First Name:
                    <input
                        value={values.first_name}
                        onChange={onChange}
                        name='first_name'
                        type='text'
                    />
                </label>

                <label>Last Name:
                    <input
                        value={values.last_name}
                        onChange={onChange}
                        name='last_name'
                        type='text'
                    />
                </label>

                <label>Email:
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password:
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>

                <label>Terms of Service
                    <input
                        type='checkbox'
                        name='termsofservice'
                        checked={values.termsofservice}
                        onChange={onChange}
                    />
                </label>

                <button disabled={disabled}>submit</button>
                <div className='errors'>
                    <div className='firstname-error'>{errors.first_name}</div>
                    <div className='lastname-error'>{errors.last_name}</div>
                    <div className='email-error'>{errors.email}</div>
                    <div className='password-error'>{errors.password}</div>
                    <div className='termsofservice-error'>{errors.termsofservice}</div>
                </div>
            </div> 
        </form>
    )
}

