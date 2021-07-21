/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.3 onboarding project app.js
 * 7/21/2021
 **/

//Import statements
import React, {useEffect, useState} from "react";
import "./App.css";
import Form from "./components/Form";
import schema from "./validation/formSchema";
import { reach } from "yup";
import axios from "axios";

//Initial form values
const initialFormValues = { name: " ", email: " ", password: " ", terms: false }

//Initial form errors
const initialFormErrors = { name: " ", email: " ", password: " ",}

//Initial user init to empty []
const initialUser=[];

//Button is disabled upon page load
const initialDisabled = true;

//Default app function definition
export default function App() 
{
  //State variable declarations, initializations
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //post new user function def, newUser parameter
  const postNewUser = newUser => 
  {
    axios
    //Post the data to the back end, newUser is payload
    .post('https://reqres.in/api/users', newUser)

    //Then set the user data
    .then(res => { setUser([res.data, ...user]) })
    
    //catch any errors and log
    .catch(err => { console.log(err)})

    //Set the form values in any case
    .finally(() => {setFormValues(initialFormValues)})
  }

  //Validate function def, pass in name and value
  const validate =(name, value) => 
  {
    //Reach(), pass in schema and name
    reach(schema, name)
    //Validate value
    .validate(value)
    //then set any errors
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    //catch any errors
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  //Input change function def, pass in name and value
  const inputChange = (name, value) => 
  {
    //Validate
    validate(name, value)

    //Set the form values
    setFormValues({ ...formValues, [name]: value })
  }

  //Onsubmit function, no parameters
  const formSubmit = () => 
  {
    //New user object
    const newUser = 
    {
      name: formValues.name.trim(),
      email: formValues.name.trim(),
      password: formValues.name.trim(),
      terms: ['terms'].filter(term => formValues[term])
    }
    //Post the info
    postNewUser(newUser);
  }

  //Use effect hook() for validation
  useEffect(() => 
  {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  //[formValues] to run when any form value changes are detected
  }, [formValues])

  //Return function
  return (
    <div className="Container">
    
    {/* Define the props */}
    <Form
      values = {formValues}
      change = {inputChange}
      submit = {formSubmit}
      disabled = {disabled}
      errors = {formErrors}
    />

    {//Map over the user array
      user.map(user => 
      {
        //Return the user information
        return (
          <p>{user.name}</p>
        )
      })
    }
    </div>
  );
}