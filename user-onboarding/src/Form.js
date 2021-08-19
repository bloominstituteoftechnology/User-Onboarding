import React from 'react'

export default function Form(props){
    const{
        values,
        change,
        submit,
        disabled,
        errors
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a User</h2>

                <button id='submitBtn' disabled={disabled}>Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>


                {/* Text Inputs */}
                <label>Name: 
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
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


                {/* Checkbox */}
                <label>Terms of Service
                    <input
                        name='termsOfService'
                        type='checkbox'
                        checked={values.termsOfService}
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}