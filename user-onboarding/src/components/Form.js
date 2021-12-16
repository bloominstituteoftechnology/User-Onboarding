import React from 'react';

export default function Form(props){
//    destructure props obj.
    const {
        values,
        change,
        submit,
        disabled,
        errors
    } = props;

// on submit function
const onSubmit = evt =>{
    evt.preventDefault()
    submit()
}
// on change function
const handleChange = evt =>{
    // destructure evt
    const{
        name,
        value,
        checked,
        type
    } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    console.log(evt)
    change(name, valueToUse)
}

// include these in form
// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.

    return (
        <form onSubmit={onSubmit}>
            <h2>New User</h2>
            
            <div className='errors'>
            {/* validation errors here */}
            <div>{errors.firstName}</div>
            <div>{errors.lastName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.terms}</div>
            </div>

            <div>
                {/* inputs here */}
                <label>First Name
                <input
                type='text'
                name='firstName'
                value={values.firstName}
                onChange={handleChange}
                />
                </label>

                <label>Last Name
                <input
                type='text'
                name='lastName'
                value={values.lastName}
                onChange={handleChange}
                />
                </label>

                <label>Email
                <input
                type='text'
                name='email'
                value={values.email}
                onChange={handleChange}
                />
                </label>

                <label>Password
                <input
                type='password'
                name='password'
                value={values.password}
                onChange={handleChange}
                />
                </label>

                <label>Agree To Terms of Service
                <input
                type='checkbox'
                name='terms'
                checked={values.terms}
                onChange={handleChange}
                />
                </label>

                <button disabled={disabled}>submit</button>

            </div>

        </form>
    )
}