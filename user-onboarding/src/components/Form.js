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
                                <br/>
                    <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                    />
                </label>
                                <br/>
                <label>Password
                                <br/>   
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                            <br/>
                <label>Email
                            <br/>
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>
                            <br/>
                <label>Agree with Terms of Service
                    <input
                    type='checkbox'
                    name='terms'
                    onChange={onChange}
                    checked={values.term}
                    />
                </label>
                            <br/>
                <button name='submit' disabled={disabled}>Submit</button>
            </div>
            

        </form>
    )
}
