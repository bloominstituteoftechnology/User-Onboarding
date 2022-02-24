import React, { useEffect, useState } from "react";

// ! ^^^^ DON'T FORGET TO IMPORT REACT
// ! ^^^^ DON'T FORGET TO IMPORT USESTATE !!!!

import logo from "./logo.svg";
import "./App.css";

import Form from "./Form";
import * as yup from "yup";
import formSchema from "./formSchema";
import axios from "axios";

// *Set initial states

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialDisabled = true;

const initialUsers = [];

// * App is what is rendered to DOM (bringing in Form file)

 function App() {

  // ! Declare slices of state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

// ! Set up helper functions (implementation)
 const getUsers = () => {
   axios.get("https://reqres.in/api/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(error=> console.error(error));
 }

//! When we first load the page, we want input fields to be blank! 
  const postNewUser = newUser => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers( [res.data, ...users] ); //*when posting new user, take res.data, sift through friends and add friends to it..?
        setFormValues(initialFormValues) //* when posting a new user, set the initial values as blank (all empty strings up there ^)
      })
      .catch((error) => console.error(error));
  };

// ! when the user submits data, take the data they input (the form values), and do that vv to it
  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim() ,
      email: formValues.email.trim(),
      password: formValues.password.trim() ,
      // terms: ,

    }
    postNewUser(newUser);
  }

 //! set up your event handler (the actual validation process for yup) 
  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors( { ...formErrors, [name]: "" } ) )
    .catch(error => setFormErrors( { ...formErrors, [name]: error.errors[0] } ) )
  }

  // *what will happen when things actually change in the input fields
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }


  // !Set up your useEffect functions
  useEffect( () => {
    getUsers()
  }, [] )
  
useEffect( () => {
  formSchema.isValid(formValues)
  .then( valid => setDisabled(!valid) )
}, [formValues] )



  return (
    <div className="App">
      <header className="App-header">
        <img src="./amazon-logo.png" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* Giving App.js access to Form.js and assigning it props (key value pairs) here v */}
      {/* everything needs a function up there ^^  */}
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        errors={formErrors}
        onChange={inputChange}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
