import React from 'react';

export default function Form(props) {

    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        console.log(evt.target.checked, evt.target.type);
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (

    <form className='form' onSubmit={onSubmit}>
        <div className='input'>
            <h3>Onboarding Information</h3>
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
        <div className='checkbox'>
            <h3>Terms of Service</h3>
            <label>ABC
                <input 
                    type='checkbox'
                    name='abc'
                    checked={values.abc}
                    onChange={onChange}
                />
            </label>
            <label>DEF
                <input 
                    type='checkbox'
                    name='def'
                    checked={values.def}
                    onChange={onChange}
                />
            </label>
        </div>
            <h3>Click to Submit</h3> 
        </div>

        <div className='submit'>
            <h3>Click to submit</h3>
            <button disabled={disabled}>Submit</button>
        </div>

        <div className='errors'>
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.abc}</div>
            <div>{errors.def}</div>
        </div>

    </form>

    )
}
