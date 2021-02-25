import React from 'react'

function Form(props) {
    const { values, submit, change, errors } = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    
      return (
        <form onSubmit={onSubmit}>
            <h2>Add a Friend</h2>
            <button>submit</button>
            <div>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.civil}</div>
            </div>
            <label>Username&nbsp;
                <input value={values.username} onChange={onChange} name='username' type='text'/>
            </label>
            <label>Email
                <input value={values.email} onChange={onChange} name='email' type='text'/>
            </label>
            <label>Password
                <input value={values.password} onChange={onChange} name='password' type='password'/>
            </label>
            <h4>Terms of Agreement</h4>
            <p>By checking 'I agree', you agree to our terms and conditions</p>
            <label>I agree
                <input  type='checkbox' name='agreed' onChange={onChange} checked={values.agreed}/>
            </label>
        </form>
      )}
  
  export default Form;