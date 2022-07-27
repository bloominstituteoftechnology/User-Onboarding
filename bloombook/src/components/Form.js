import React from 'react';

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.prevetDefault();
        submit()
    }
    
    const onChange = evt => {
        const {name, value, checked, type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a friend</h2>
                <button disabled={disabled} onSubmit={onSubmit}>Submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>Friend Info</h4>

                <label>Name
                    <input 
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                    />
                </label>
                
                <label>Email
                    <input 
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                    />
                </label>
                
                <label>Password
                    <input 
                        type='password'
                        name='password'
                        onChange={onChange}
                        value={values.password}
                    />
                </label>
                
                <label>Terms of Service
                    <input 
                        type='checkbox'
                        name='tos'
                        onChange={onChange}
                        checked={values.tos}
                    />
                </label>
            </div>
        </form>
    )
}



