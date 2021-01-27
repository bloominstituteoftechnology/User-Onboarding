import React from 'react'

export default function Form({values, change, submit, disabled, errors}) {
    const onSubmit = (evt) => {
        evt.preventDefault();
    };
    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type ==='checkbox' ? checked : value;
        change(name, valueToUse);
    };
    return (
        <form className='form container' onSubmit={onSubmit}>
            
            
            <div className='form inputs'>
                <h4>General Info</h4>
                <label>
                    Name&nbsp;
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label> 
                <label>
                    Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        text='text'
                    />
                </label>
                <label>
                    Password
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        text='password'
                    />
                </label>
                <br />
                <br />
                <label>
                    Agree to terms of service
                    <input 
                        checked={values.terms}
                        onChange={onChange}
                        type='checkbox'
                        name="terms"

                    />
                </label>
                <br />
                <br />
            </div>
            <div className='form submit'>
                <button disabled={disabled}>Submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
                </div>
        </form>
    )
}
