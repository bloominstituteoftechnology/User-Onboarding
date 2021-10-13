import React from 'react'



export default function Form(props){
    const{
        values,
        disabled,
        errors,
        change,
        submit,
        usersLength
    } = props

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    let button = 'regularButton'
    if(disabled===false){
        button='greenButton'
      }

    return(
        <form className='container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add New User</h2>
                <button disabled={disabled} onClick={onSubmit} className={button}>submit</button>
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h3>User Information</h3>
                <label>Name &nbsp;
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email &nbsp;
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password &nbsp;
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <label>I agree to the terms of service: &nbsp;
                    <input
                        type="checkbox"
                        onChange={onChange}
                        name='terms'
                        checked={values.terms}
                    />
                </label>
            </div>
            <h4>Number of users: {usersLength}</h4>
        </form>
    )

}