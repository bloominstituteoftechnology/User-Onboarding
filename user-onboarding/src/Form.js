import React, { useState } from 'react'
import * as yup from 'yup'

export default function Form(props) {

    const [forms, setForms] = useState({
        username: '',
        email: '',
        password: '',
        tos: false,
    })

    const change = evt => {
      const { checked, value, name, type } = evt.target;
      const valueToUse = type === 'checkbox' ? checked : value;
      setForms({ ...forms, [name]: valueToUse})
    }

    const submit = evt => {
      evt.preventDefault()
      
    }


    return (
      <div>
        <h2>Welcome, new user!</h2>
        <label>
          Name:
          <input name='username' type='text' value={forms.username} onChange={change}/>
        </label>
        <br></br>
        <label>
          Email:
          <input name='email' type='text' value={forms.email} onChange={change}/>
        </label>
        <br></br>
        <label>
          Password:
          <input name='password' type='text' value={forms.password} onChange={change}/>
        </label>
        <br></br>
        <label>
          Do you accept the terms of service?
          <input name='tos' type='checkbox' value={forms.tos} onChange={change}/>
        </label>
        <br></br>
        <button onSubmit={submit}>Join</button>
      </div>
      
    )
}