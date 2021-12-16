import React from 'react';

export default function Form(props) {

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        // console.log(evt.target.checked, evt.target.type);
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (

    <form className='form container' onSubmit={onSubmit}>
        <div className='input'>
            <h3>Information</h3>
            <label>Name: 
                <input
                    value={values.first_name}
                    onChange={onChange}
                    name='first_name'
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
                    type='password'
                />
            </label>
        </div>
        <div className='checkbox'>
            {/* <h3>Terms of Service</h3> */}
            <label>Terms of Service: 
                <input 
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                />
            </label>
        </div>

        <div className='submit'>
            <button id='submitBtn' disabled={disabled}>Submit</button>    
            <div className='errors'>
                <div>{errors.first_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>


        </div>
    </form>

    )
}
