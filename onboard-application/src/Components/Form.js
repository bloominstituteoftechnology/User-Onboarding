import React, { useState } from 'react'

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    termsOfService: false,
  }

//   const initialErrors ={
//     name: '',
//     email: '',
//     password: '',
//   }

export default function Form({postNewUser}) {

    const [formValues, setFormValues] = useState(initialFormValues)

    const formSubmit = ()=>{
        const newUser ={
            name: formValues.name.trim(),
            email:formValues.email.trim(),
            password:formValues.password.trim(),
            termsOfService:formValues.termsOfService.trim(),
        }
        postNewUser(newUser)
    }

    const onChange = e => {
        const {name, value, checked, type} = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueToUse })
      }

      const onSubmit = (evt) => {
        evt.preventDefault();
        formSubmit();
      };



return(
    <div onSubmit = {onSubmit}>
        <h1>Form</h1>
        <form>
        <label>
            Name
            <input 
            type = 'text'
            name = 'name'
            value = {formValues.name}
            onChange ={onChange}
            />
        </label>
        <label>
            Email
            <input 
            type = 'email'
            name = 'email'
            value = {formValues.email}
            onChange ={onChange}
            />
        </label>
        <label>
            Password
            <input 
            type = 'password'
            name = 'password'
            value = {formValues.password}
            onChange ={onChange}
            />
        </label>
        <label>
            Terms of Service
            <input 
            type = 'checkbox'
            name = 'termsOfService'
            value = {formValues.termsOfService}
            onChange ={onChange}
            />
        </label>
        <button type = 'submit'>Submit</button>
        </form>
    </div>
)
}