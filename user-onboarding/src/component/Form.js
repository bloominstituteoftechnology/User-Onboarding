import React, {useState} from "react";
import * as yup from 'yup'

let formSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email().required('email is required'),
    password: yup.string().required('password is required'),
    terms: yup.boolean().oneOf([true], 'AGREE')
})

export default function Form() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        password: "",
        terms: "",
    })


const formSubmit = (event) => {
    event.preventDefault()
}

const validate = (event) =>{
    yup.reach(formSchema, event.target.name).validate(event.target.value)
    .then(valid =>{
        setError({
            ...error,
            [event.target.name]: ""
        })
    })
    .catch(err =>{
        console.log(err.errors)
        setError({
            ...error,
            [event.target.name] : err.errors[0]
        })
    })
}

const inputChange = (event) =>{
    event.persist()
  validate(event)
  let value = event.target.type === "checkbox" ? event.target.checked : event.target.value
  setForm({...form, [event.target.name]: value})
}

  return (
    <form className="form" onSubmit = {formSubmit}>

      <label htmlFor="name">Name</label> 
      <input id="name" name="name" type="text" value={form.name} onChange={inputChange}/>
      <label htmlFor="email">Email {error.email.length > 0 ? <p className="error">{error.email}</p> : null}</label>
      <input id="email" name="email" type="email" value={form.email} onChange={inputChange} />
      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="password" value={form.password} onChange={inputChange} />
      <label htmlFor="terms">Terms of Service</label>
      <div className="alignTerms">
          <input id="terms" type="checkbox" checked={form.terms} name="terms" className="checkBox" onChange={inputChange}  />
     </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
}
