import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import axios from 'axios';

const schema = yup.object().shape({
  user: yup.string().required('name is required...'),
  email: yup.string().required('a valid email is required...'),
  password: yup.string().required('you must enter a password...'),
  role: yup.string().oneOf(['1', '2', '3'], 'You must choose a role...'),
  tos: yup.boolean().oneOf([true], "You must agree to the Terms of Service")
})

const Form = () => {

  

  const [ form, setForm ] = useState({ user: "", email: "", password: "", role: "", tos: false});
  const [ errors, setErrors ] = useState({ user: "", email: "", password: "", role: "", tos: ""});
  const [ disabled, setDisabled ] = useState(true);


  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({ ...errors, [name]: "" }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
  }

  const change = evt => {
    const { checked, value, name, type } = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    setFormErrors(name, valueToUse)
    setForm({ ...form, [name]: valueToUse})
  }

  const submit = evt => {
    evt.preventDefault();
   
    

    const newUser = {
      user: form.user.trim(),
      email: form.email.trim(),
      password: form.password,
      role: form.role,
      tos: form.tos
     }

    axios
      .post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data);
        
      })
      .catch(err => {

      })
  }

  useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
  }, [form])
    

  return (
    <>
    
      <header className="header">
        <h2>New User Form</h2>
      </header>
      <form
        onSubmit={submit} class="form-container">
        <div>

          <label>Name:  
            <div className="header-div" style={{ color: 'red'}}>
              <div>{errors.user}</div>
            </div>
            <input
              onChange={change}
              value={form.user}
              name="user"
              type="text"
              id="user"
              placeholder="Please enter a name"
            />
          </label>
            


          <label>Email: 
            <div style={{ color: 'red'}}>
              <div>{errors.email}</div>
            </div>
            <input
              onChange={change}
              value={form.email}
              name="email"
              type="email"
              id="email"
              placeholder="Please enter an email"
            />
          </label>

          <label>Password: 
            <div style={{ color: 'red'}}>
              <div>{errors.password}</div>
            </div>
            <input
              onChange={change}
              value={form.password}
              name="password"
              type="password"
              id="password"
              placeholder="Please enter a password"
            />
          </label>
          
          <label>Role:
            <div style={{ color: 'red'}}>
              <div>{errors.role}</div>
            </div>
            <select onChange={change} value={form.role} name="role">
              <option value="">--Select One--</option>
              <option value="1">Frontend Engineer</option>
              <option value="2">Backend Engineer</option>
              <option value="3">Developer</option>
            </select>
          </label>
        
          <label>Agree to ToS?  
            <div style={{ color: 'red'}}>
              <div>{errors.tos}</div>
            </div>
            <input
              onChange={change}
              value={form.tos}
              name="tos"
              type="checkbox"
              id="tos"
            />
          </label>

          <br /><br />

          <button disabled={disabled}>Add User</button>
        </div>
      </form>
    </>
  )
}

export default Form;