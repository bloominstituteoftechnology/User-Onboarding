import React from 'react'

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;
    
  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { checked, value, name, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
  }

    


    return (
      <div>
        <h2>Welcome, new user!</h2>
        <form className="form container" onSubmit={onSubmit}>
          <label>
            Name:
            <input name='username' type='text' value={values.username} onChange={onChange}/>
          </label>
          <br></br>
          <label>
            Email:
            <input name='email' type='text' value={values.email} onChange={onChange}/>
          </label>
          <br></br>
          <label>
            Password:
            <input name='password' type='text' value={values.password} onChange={onChange}/>
          </label>
          <br></br>
          <label>
            Do you accept the terms of service?
            <input name='tos' type='checkbox' value={values.tos} onChange={onChange}/>
          </label>
          <br></br>
          <button disabled={disabled} >Join</button>
          <div style={{ color: 'red' }}>
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.tos}</div>
        </div>
        </form>
      </div>
      
    )
}