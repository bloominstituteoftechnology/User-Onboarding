import React, { useState, useEffect } from "react";
import * as yup from 'yup'

export default function Form() {


  
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: "",
      });
    
      const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    
      })
    

 let formSchema = yup.object().shape({
  name: yup.string().required('name is required'),
  email: yup.string().email('email is required'),
  password: yup.string().required('password is required'),
  terms: yup.boolean().oneOf([true], 'please agree to terms of use')
 })


const formSubmitHandler = (event)=>{
    event.preventDefault()
}

const inputHandler = (event) =>{
  setFormState({name: event.target.value})
  console.log(event.target.value)
}


const [buttonDisabled, setButtonDisabled]= useState(true);

useEffect(()=>{
formSchema.isValid(formState).then(valid =>{
    setButtonDisabled(!valid)
})
}, [formState])




  return (
<form className="form" onSubmit={formSubmitHandler}>

<label htmlFor="name">Name</label> 
<input id="name" name="name" type="text" value={formState.name} onChange={inputHandler}/>
<label htmlFor="email">Email</label>
<input id="email"  name="email" type="text" value={formState.email} onChange={inputHandler}/>
<label htmlFor="password">Password</label>
<input id="password"  name="password" type="password" value={formState.password} onChange={inputHandler}/>
<label htmlFor="terms">Terms of Service</label>
<div className="alignTerms"><input id="terms" type="checkbox"  name="terms" className="checkBox" checked={formState.terms} onChange={inputHandler} /></div>

<button type="submit" className="btn" disabled={buttonDisabled}>Submit</button>
</form>
  );
}

