import React from 'react'

export default function Form(props) {
const { values, submit, change, disabled, errors} = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const {name, value, type, checked} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse) 
}

return (
    <form classname = 'form container' onSubmit={onSubmit}>
        <div classname = 'form-group submit'>
            <h2>Add User</h2>
            <button disabled={disabled}>SUBMIT</button>
            <div classname = 'errors'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
        </div>
        
        <div classname = "form-group inputs">
            <h4>General Information</h4>
            <label>Username
                <input
                value={values.username}
                onChange={onChange}
                name='username'
                type='text'
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
            <label>Password
                <input 
                value={values.password}
                onChange={onChange}
                name='password'
                type="text"
                />
            </label>
            <label>Terms of Service
                <input 
                type='checkbox'
                />
            </label>
        </div>
    </form>
)
}