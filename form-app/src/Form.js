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
    const {name, type, value, checked} = evt.target
    const inputValue = type === "checkbox" ? checked : value
    change(name, inputValue)
}

return (
    <form className='form container' onSubmit={onSubmit}>
        <div classname='form-group submit'>
            <h2>Add a User</h2>
            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
        </div>

        <div className='form-group inputs'>
            <h4>User Info</h4>

            <label>Name
                <input
                value={values.name}
                onChange={onChange}
                name='name'
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
                type='text'
                />  
            </label>

            <label>Terms of Service
            <input
                onChange={onChange}
                name='terms of service'
                type='checkbox'
                checked={values.serviceTerms}
                />  
            </label>
            
        </div>
    </form>
)


}