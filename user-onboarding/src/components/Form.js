import React from 'react'

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
        const { name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a User</h2>

                <button disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>
                <label>Username
                    <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                    />
                </label>
                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
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
                <label>Agree to Terms of Service
                    <input
                    type='radio'
                    name='terms'
                    value='yes'
                    onChange={onChange}
                    checked={values.terms === 'yes'}
                    />
                </label>
                <label>Disagree to Terms of Service
                    <input
                    type='radio'
                    name='terms'
                    value='no'
                    onChange={onChange}
                    checked={values.terms === 'no'}
                    />
                </label>
            </div>
            

        </form>
    )
}
