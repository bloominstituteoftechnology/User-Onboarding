import React, { useState} from "react";
import * as yup from 'yup'



let formSchema = yup.object().shape({
    name: yup.string().required('Name is required!'),
    email: yup.string().email().required('Email is required!'),
    password: yup.string().required('Password is required!'),
    terms: yup.boolean().oneOf([true], "Must check terms and conditions! ")
    })
    

export default function Form() {
  
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
      });
    

const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
})


const formSubmit = (event)=>{
    event.preventDefault()
}

const validate = (event) =>{
    yup.reach(formSchema, event.target.name).validate(event.target.value)
    .then(valid =>{
        setErrorState({
            ...errorState,
            [event.target.name]: ""
        })
    })
    .catch(err =>{
        console.log(err.errors)
        setErrorState({
            ...errorState,
            [event.target.name] : err.errors[0]
        })
    })
}



const inputChange = (event) =>{
    event.persist()
  validate(event)
  let value = event.target.type === "checkbox" ? event.target.checked : event.target.value
  setFormState({...formState, [event.target.name]: value})
}






  return (
<form className="form" onSubmit={formSubmit}>

<label htmlFor="name">Name</label> 
<input id="name" name="name" type="text" value={formState.name} onChange={inputChange}/>
<label htmlFor="email">Email {errorState.email.length > 0 ? <p className="error">{errorState.email}</p> : null}</label>
<input id="email"  name="email" type="email" value={formState.email} onChange={inputChange}/>
<label htmlFor="password">Password</label>
<input id="password"  name="password" type="password" value={formState.password} onChange={inputChange}/>
<label htmlFor="terms">Terms of Service</label>
<div className="alignTerms"><input id="terms" type="checkbox" checked={formState.terms}  name="terms" className="checkBox" checked={formState.terms} onChange={inputChange} /></div>

<button type="submit" className="btn">Submit</button>
</form>
  );
}

