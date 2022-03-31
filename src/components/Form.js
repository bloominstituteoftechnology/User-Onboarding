import React from 'react'
//the meat and potatoes of the app, this sets up the form. 



export default function Form(props) {
    const {values, submit, change, errors} = props;


const onChange = evt => {
    const {name, value, checked, type} = evt.target;
    const newVal = type === 'checkbox' ? checked : value;
    change(name, newVal)
}


    return (
    <form onSubmit = {submit} className = 'form-container'>
        <div className = 'errors'>
            <p>{errors.name}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
            <p>{errors.termsOfService}</p>
        </div>
        <div className="form-inputs">
            <label>Name 
                <input 
                    type='text'
                    name='name'
                    value={values.name}
                    onChange={onChange}
                    placeholder='Type your name'
                />
            </label>
            <label>Email 
                <input 
                    type='email'
                    name='email'
                    onChange={onChange}
                    value={values.email}
                    placeholder='Type your email'
                />
            </label>
            <label>Password 
                <input 
                    type='password'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                    placeholder='Type a password'
                />     
            </label>
        </div>
        <div className = "form-checkboxes">
            <label>I have read the <a href="https://www.youtube.com/watch?v=6NqM7FlmTCo" target='_blank' rel="noreferrer">Terms of Service</a> 
                <input 
                    type='checkbox'
                    name='termsOfService'
                    onChange={onChange}
                    checked={values.termsOfService}
                />              
            </label>
            </div>
        <input type='submit'  value='Create new user' />
    </form>

    );
}