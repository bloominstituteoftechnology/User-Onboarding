import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
//import Data from "./Data"

const formSchema = yup.object().shape({
    id: Date.now(),
    name: yup.string().required("Name is a required field"),
    email: yup
    .string()
    .email("Must be a valid email address")
    .required("Must include email address"),
    password: yup.string().required("Password is a required field"),
    terms: yup.boolean().oneOf([true], "Please agrre to terms of use")

})

export default function Form() {
    const [formState, setFormState]= useState({
         id: Date.now(),
        name: "",
        email: "",
        password:  "",
        terms: false

    })
    const [post, setPost] = useState([]);
    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        motivation: "",
        position: "",
        terms: ""
      });
    
      const validate = (event) => {
      let value =
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
        yup
        .reach(formSchema, event.target.name)
        .validate(value)  
        .then( valid => {
            setErrorState({
                ...errorState,
                [event.target.name]: ""
              });
        })    
        .catch( err => { 
            console.log(err.error)
            setErrorState({
                ...errorState,
                [event.target.name]: err.errors[0]
              });
           
        })
      }

    
    const changeHandler  = event => {
        event.persist();
        validate(event)
        let value = 
        event.target.type === "checkbox" ? event.target.checked: event.target.value;
        
        setFormState({
          ...formState,
          [event.target.name]: value
        });
      };
      const formSubmit = event => {
       event.preventDefault();
        console.log("form submitted!")
        axios
          .post("https://reqres.in/api/users", formState)
          .then(response => setPost([...post, response.data]))
          .catch(err => console.log(err));
          

         
      };

      
    
    return(
     <form onSubmit={formSubmit} >
         <label htmlFor = "name"> Name: </label>
         <input name = "name" 
                placeholder = "Enter Name " 
                value= {formState.name}
                onChange= {changeHandler}
                    />
          
         <label htmlFor = "email"> Email: </label>
         <input name = "email"
                type = "email"
                placeholder = "Enter Email"
                value = {formState.email}
                onChange= {changeHandler}
         />
          {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
         <label htmlFor ="password"> Password: </label>
         <input name = "password"
                type = "password"
                placeholder = "Password"
                value= {formState.password}
                onChange= {changeHandler}
         />
          {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
         <label htmlFor = "terms">  Terms & Conditions </label>
         <input
         id = "terms"
         name = "terms"
         type= "checkbox"
         checked = {formState.terms}
         onChange ={changeHandler}
         />
         <button>Summit</button>
         <pre>{JSON.stringify(post, null, 2)}</pre>
         
     </form>
    );


};

    
    
    