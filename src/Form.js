import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Input from './Input.js';
import schema from './formSchema.js';



function Form() {
  // ------------------ Initial States -------------
  const initialUsers = [
    { name: 'John Doe', email: 'doe@gmail.com', password: 12345, acceptTerms: true },
  ];

  const initialFormValues = {
    name: '', 
    email: '',
    password: '',
    role: '',
    acceptTerms: false
  };

  const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    role: '',
    acceptTerms: '',
  };

  const initialDisabled = true;
  // -------------------- States -----------------
  const [users, setUsers] = useState(initialUsers); // users
  const [formValues, setFormValues] = useState(initialFormValues); // inputs
  const [formErrors, setFormErrors] = useState(initialFormErrors); // errors, mechanism for reset
  const [disabled, setDisabled] = useState(initialDisabled) // boolean, for submit button 
  const [formState, setFormState] = useState(false); // checkbox


    // -------------------- Helper Functions -----------------
  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ... users])
        console.log("Successful res back from Axios, res.data: ", res.data)
        setFormValues(initialFormValues) // reset form
      })
      .catch(err => {
        console.log("Error: ", err)
        debugger
      })
  }

  const validate = (name, value) => {
    console.log("validate: ", name, value)
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }; // run validation with yup

    // -------------------- Event Handlers -----------------


  const inputChange = (e) => {
    const { name, type, value, checked } = e.target;
    // console.log(`name: ${name}, value: ${value}`);
    const inputValue = type === 'checkbox' ? checked : value;
    console.log("inputValue: ", inputValue)
    validate(name, inputValue);
    setFormValues({ ...formValues, [name]: inputValue }); // [ ] is not an array
  } 

  const formSubmit = (e) => {
    e.preventDefault(); //  to prevent browser refresh

    const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        role: formValues.role, 
        acceptTerms: formValues.acceptTerms, 
    }
    console.log("new User: ", newUser)
    postNewUser(newUser) // post new user using helper function postNewUser
   };

    // -------------------- Side Effects -----------------
  //  useEffect (() => {
  //   getUsers()
  //  }, []); // You would use this if your were doing a fetch to populate Users in the beginning

   useEffect(() => {
     schema.isValid(formValues).then(valid => setDisabled(!valid))
   }, [formValues]); // Adjust the status of 'disabled" every time formValues changes

   useEffect(() => {
    console.log("The form Errors have changed", formErrors)
   }, [formErrors]);


  return (
    <div>
  
      <form onSubmit={formSubmit}>

        <Input
            type="text"
            name="name"
            placeholder="name"
            onChange={inputChange} 
            value={formValues.name}
            label={"Name"}
        />

        <Input
            type="text"
            name="email"
            placeholder="email"
            onChange={inputChange} 
            value={formValues.email}
            label={"Email"}
        />

        <Input
            type="text"
            name="password"
            placeholder="password"
            onChange={inputChange} 
            value={formValues.password}
            label={"Password"}
        />

        <select name="role" onChange={inputChange} id= "role-select">
          <option value="" >Select Role</option>
          <option value="note-taker">Note Taker</option>
          <option value="zoom-master">Zoom Master</option>
          <option value="facilitator">Facilitator</option>
          <option value="time-keeper">Time Keeper</option>
        </select>

        <label>
          I Accept The Terms of Service
          <input
            name="acceptTerms"
            type="checkbox"
            checked={formValues.acceptTerms} // The expression `formState.acceptTerms` evaluates to either true or false.
            onChange={inputChange}
          />
        </label>

          <button id="submitBtn" disabled={disabled}>Submit</button> 

          <div>{formErrors.name}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.role}</div>
          <div>{formErrors.acceptTerms}</div>


      </form>

    </div>

  );
}

export default Form;