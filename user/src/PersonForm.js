import React from "react"
import { useState, useEffect } from "react"
import * as yup from "yup"
import axios from "axios"
import schema from "./validation/schema"

 // Helpers
const initialDisable = true

// initial states
const initialFormValues = {
    // text inputs
    name: "",
    email: "",
    password: "",
    // Checkbox
    terms: false,
  }
  // initial errors
  const initialFormErrors = {
    name: "",
    email: "",
    password: "",
  }
  
function PersonForm(props) {
    const {setUser}=props
// states
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disable, setFormDisable] = useState(initialDisable)

    const postNewUser = newUser => {
        // post
        axios
          .post(`https://reqres.in/api/users`, newUser)
          .then((response) => {
            setUser(response.data)
              console.log(response.data)
          }).catch((error) => {
          
        })
      }
    const onSubmit = evt => {
        evt.preventDefault()
        postNewUser(formValues)
        setFormValues(initialFormValues)
        } 
    const inputChange = (name, value) => {
            // yup
            yup
              .reach(schema, name)
              .validate(value)
              .then((err) => {
                setFormErrors({
                  ...formErrors,
                  [name]: [],
                })
              }) 
                
            .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })
            });
            
            setFormValues({
              ...formValues,
              [name]: value
            })
          }
          useEffect(() => {
            // validate all form values
              schema.isValid(formValues).then((valid) => {
                setFormDisable(!valid);
              });
            }, [formValues])

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name, valueToUse,)
        }
    
    return (
     <form className ="form-container" onSubmit={onSubmit}>
        <div>
          <h1>Avanced Form</h1>
            <label> Name
             <input
                type="text"
                name="name"
                onChange={onChange}
                value={formValues.name}
             />
                </label>  
                
            <label> Email
             <input
                type="email"
                name="email"
                onChange={onChange}
                value={formValues.email}
             />    
            </label>   
            <label> Password
             <input
                type="password"    
                name="password"  
                onChange={onChange}
                value={formValues.password}               
             />
             </label>   
                
        <div className="term">
             <label> I agree
                <input
                type="checkbox"        
                name= "terms"
                value={formValues.terms}
                onChange={onChange}        
               />
             </label>
        </div>
        <div className="submit">
                    <button id="submit-btn" disabled={disable} >Submit</button>
        </div>
        </div>
    </form>
    )
}
export default PersonForm