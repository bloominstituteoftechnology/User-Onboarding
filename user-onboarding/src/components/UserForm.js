import React from 'react';

export default function UserForm({values, submit, change, disabled, errors}) {
   
    const onSubmit = e => {
        e.preventDefault();
        submit();
    }

    const onChange = e => {
        const {name, value, checked, type} = e.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form submits'>
            <h2>Add a new User</h2>

            <button disabled={disabled}>Add Me!</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>   
        </div>

        <div className='form inputs'>
            <h4>Enter your Info Below!</h4>

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
                type='email'
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

            <div className='form checkbox'>
                <h4>Terms and Conditions</h4>

                <label>I Agree 
                    <input 
                    type='checkbox'
                    name='agree'
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>


                <label>I do NOT Agree 
                    <input 
                    type='checkbox'
                    name='disagree'
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>
            </div>
        </div>
    </form>
    )
}
