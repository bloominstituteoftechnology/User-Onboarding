import React from 'react';

export default function UserForm(props){
    const {values, change, submit, disabled, errors} = props;

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    }

    const onChange = (evt) =>{
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value
        change( name, valueToUse)
    }


    return(
        <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
        
        <h2>Enter Your Information</h2>

        <div className='errors'>
            <div>{errors.firstName}</div>
            <div>{errors.lastName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
        </div>

        <div className='form-group inputs'>
        
            <label>First Name
                <input 
                    type='text'
                    value={values.firstName}
                    name='firstName'
                    onChange={onChange}
                />
            </label>

            <label>Last Name
                <input 
                    type='text'
                    value={values.lastName}
                    name='lastName'
                    onChange={onChange}
                />
            </label>

            <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    type="text"
                />
            </label>

            <label>Password
                <input 
                    type='text'
                    value={values.password}
                    name='password'
                    onChange={onChange}
                />
            </label>

            <label>Terms Of Service
                <input 
                    type='checkbox'
                    checked={values.termsOfService}
                    name='termsOfService'
                    onChange={onChange}
                />
            </label>

        </div>

        <button disabled={disabled}>Submit</button>

        </div>
        </form>
    )


}