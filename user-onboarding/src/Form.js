import React from 'react'



export default function Form(props){
    const{
        values,
        disabled,
        errors,
        change,
        submit
    } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
        console.log('hello')
    }
    
    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add New User</h2>
                <button onClick={onSubmit} disabled={disabled}>submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h2>User Information</h2>
                <label>Name&nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email&nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password&nbsp;
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <label>Please indicate that you've read the terms of service:&nbsp;
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name='terms'
                        checked={values.terms}
                    />
                </label>
            </div>
        </form>
    )

}