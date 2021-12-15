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
        <div className='form'>
            <h2>Add a new User</h2>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>   
        </div>

        <div className='form inputs'>

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

        <div className='password'>
            <label>Password 
                <input 
                value={values.password}
                onChange={onChange}
                name='password'
                type='password'
                />
            </label>
        </div>
        
            <div className='form checkbox'>
                <h4>Terms and Conditions</h4>
                <p>You agree to give away all your data and let it be sold to a third party.</p>

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
            <div className='submits'>
                <button disabled={disabled}>Add Me!</button>
            </div>
        </div>
    </form>
    )
}
