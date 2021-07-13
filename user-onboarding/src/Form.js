import React from 'react'

export default function Component(props) {

    const {values, submit, change, disabled, errors} = props

    const onChange = evt => {
        const {name, type, value, checked} = evt.target
        const inputValue = type === "checkbox" ? checked : value
        change(name, inputValue)
    }

    const onSubmit = evt => {
        evt.preventDefault(
            submit()
        )
    }

    return (
        <form className='container' onSubmit={onSubmit}>
            <div className='submit'>
                <h2>Add New User</h2>
                <button disabled={disabled}>submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className='input-spaces'>
                <h3>UserInfo</h3>

                <label>Name
                    <input value={values.name} onChange={onChange} name='name' type='text'/>
                </label>

                <label>Email
                    <input value={values.email} onChange={onChange} name='email' type='text'/>
                </label>

                <label>Password
                    <input value={values.password} onChange={onChange} name='password' type='text'/>
                </label>

                <label>Terms of Service
                    <input onChange={onChange} checked={values.tos} name='terms of service' type='checkbox'/>
                </label>
            </div>
        </form>
    )
}