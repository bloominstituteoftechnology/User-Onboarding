import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from 'axios';
import DisplayNames from "./DisplayNames"

const Form = () => {

  
  const initialFormState = {
    name: "",
    email: "",
    password: "",
    terms: ""
  }

  // State
  const [formState, setFormState] = useState(initialFormState);
  const [isBtnDisabled, setIsBtnDisabled] = useState();
  const [errors, setErrors] = useState(initialFormState);
  const [users,setUsers] = useState([]);

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("must be a vaild email").required(),
    password: yup.string("Must be at least 6 chars long."),
    terms: yup.boolean().oneOf([true], "please aggree with us.")
  })
// valadation
  const validateChange = e => {
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({ ...errors, [e.target.name]: ""})
    })
    .catch(err => {
      setErrors({...errors, [e.target.name]: err.errors[0] })
    })

  }

  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setIsBtnDisabled(!valid);
    })
  }, [formState, formSchema]);
// submit
  const formSubmit = e => {
    e.preventDefault();
    console.log(formState);
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        console.log(res.data)
        const data = res.data
        setUsers([...users, data])
        setFormState(initialFormState)
        console.log(users, "in then")
        })
        .catch(err => console.log(err))
  }
//imput
  const inputChange = e => {
    console.log("input Changed", e.target.value);
    e.persist();
    const newFormData = {
      ...formState,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e)
    setFormState(newFormData)
  }


return(
  <div>
  <form onSubmit={formSubmit}>
    <label htmlFor="name">Name 
      <input 
        id="name" 
        type="text" 
        name="name" 
        value={formState.name}
        onChange={inputChange}
      />
      {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
    </label>
    <label htmlFor="email">Email 
      <input 
        id="email" 
        type="email" 
        name="email" 
        value={formState.email}
        onChange={inputChange}
      />
      {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
    </label>
    <label htmlFor="password">Password 
      <input 
        id="password" 
        type="password" 
        name="password" 
        value={formState.password}
        onChange={inputChange}
      />
    </label>
    <label htmlFor="terms">Terms of Service 
      <input 
        id="terms" 
        type="checkbox" 
        name="terms"
        checked={formState.terms}
        onChange={inputChange}
      />
    </label>
    <button disabled={isBtnDisabled} type="submit">Submit</button>
  </form>
    {users.map(users => {
      return(
      <DisplayNames key={users.id} users={users} />
    )})}
    
  </div>
  )
}
export default Form;