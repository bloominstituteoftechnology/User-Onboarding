import React from "react";


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
    const {name, value, checked, type} = evt.target
    const realValue = type === 'checkbox' ? checked : value;
    change(name, realValue)
}

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Please be sure to fill out the following</h2>
            <button disabled={disabled}>submit</button>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsOfService}</div>
            </div>  
        </div>
        <div className='form-group inputs'>
            <h4>General Information</h4>
            <label>Name
                <input
                type='text'
                name='name'
                value={values.name}
                onChange={onChange}
                />
            </label>
            <label>Email
                <input
                type='text'
                name='email'
                value={values.email}
                onChange={onChange}
                />
            </label>
            <label>Password
                <input
                type='password'
                name='password'
                value={values.password}
                onChange={onChange}
                />
            </label>

            <div className='form-group checkboxes'>
                <h4>Please read the following Terms of Serice</h4>

                <label>Terms of Serice
                    <input 
                    type='checkbox'
                    name='terms of service'
                    value={values.termsOfService}
                    onChange={onChange}
                    />
                </label>
            </div>

        </div>

    </form>








)
}