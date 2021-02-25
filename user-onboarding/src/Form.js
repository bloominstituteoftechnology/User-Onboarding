import React from 'react'

function Form(props) {
    const{ values, submit, change, disabled, errors,} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        console.log(evt.target)
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return(
        <form className= 'form container' onSubmit={onSubmit}>
            <div className= 'form title'>
                <h2>User Sign Up</h2>
                <button disabled={disabled}>Submit</button>
                <div className= 'errors'>
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
            <div className= 'user signup'>
                <label>First Name
                    <input
                        value={values.first_name}
                        onChange={onChange}
                        name='first_name'
                        type='text'
                    />
                </label>
                <label>Last Name
                    <input
                        value={values.last_name}
                        onChange={onChange}
                        name='last_name'
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
                        type='password'
                    />
                </label>
                <label>Terms Of Service
                    <input 
                        type='checkbox'
                        name='termsOfService'
                        onChange={onChange}
                        checked={values.termsOfService}
                    />
                </label>
            </div>
        </form>
    )

}

export default Form