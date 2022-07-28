import React from 'react'

const Form = props => {
const {values,submit, change, disabled, errors} = props

const onChange = e => {
    const { name, value, checked, type } = e.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}

const onSubmit = e => {
    e.preventDefault()  
    submit()
}

    return(
        <>
        <h2>Form</h2>
        <form onSubmit={onSubmit}>
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>
            <label>
                First Name<br></br>
                <input 
                type='text'
                name='first_name'
                value={values.first_name}
                placeholder="First Name"
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                Last Name<br></br>
                <input 
                type='text'
                name='last_name'
                value={values.last_name}
                placeholder="Last Name"
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                Email<br></br>
                <input
                type='email'
                name='email'
                value={values.email}
                placeholder='Email Address'
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
               Password<br></br>
                <input
                type='password'
                name='password'
                value={values.password}
                placeholder='Password'
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                Do you agree to the <em>Terms of Service</em><br></br>
                <input 
                type='checkbox'
                name='tos'
                checked={values.tos}
                onChange={onChange}
                />
            </label>
            <br></br>
            <button disabled={disabled}>Submit</button>
        </form>
        </>
    )


}

export default Form