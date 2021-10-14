import React from 'react'

export default function Form(props) {
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
    const {name, value, checked, type } = event.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}

return (
    <form className='form container'onSubmit={onSubmit}>
        <div className='form submit'>
            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </div>

        <div className="form inputs">
            <h3>General Info</h3>
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
                    type='email'
                    name='email'
                    placeholder='type in email'
                    maxLength='25'
                    value={values.email}
                    onChange={onChange}
                />
            </label>
            <label>Password
                <input 
                    type='text'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                />
            </label>
            <label>Terms of Service
                <input 
                    type='checkbox'
                    name='terms'
                    onChange={onChange}
                    checked={values.checked}
                />
            </label>

        </div>
    </form>
)
}