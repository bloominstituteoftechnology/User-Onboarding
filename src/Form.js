import React from 'react'

export default function Form(props) {
    const {
        values, 
        submit, 
        change, 
        disabled, 
        errors, 
    }= props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        
        const valueToUse = type === "checkbox" ? checked : value

        change(name, valueToUse)
    }

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Add a User</h2>
            

            <div className='errors'>
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.email}</div>
                <div>{errors.termsOfService}</div>
            </div>

            <div className='form-group inputs'>
                <h4>General Information</h4>

                <label>Username&nbsp;
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
        <div className='form-group checkboxes'>
            <h4>Agree to terms </h4>
            <label>Terms Of Service 
                <input 
                type='checkbox'
                name='termsOfService'
                checked={values.termsOfService}
                onChange={onChange}
                />
            </label>

        </div>
            </div>
        <button disabled={disabled}>Submit</button>
        </div>
    </form>



)




} 
