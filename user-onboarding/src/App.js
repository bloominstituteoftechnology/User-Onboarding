import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import formSchema from './Validation/formSchema';

// Importing component 
import Form from './Component/Form';

////////// INITIAL STATES ///////////
const initialFormValues = {
      //text inputs//
    name: '',
    email: '',
    password: '',

      //check button//
    terms: false
}

const initialUsers = [];
const initialDisabled = true

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

function App() {
      ///////////STATES///////////////
  const [user, setUser] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

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
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  //[formValues] to run when any form value changes are detected
  }, [formValues])

  return (
      <div className='container'>
        <header><h1>USERS</h1></header>
  
        <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
  
        {/* {
          friends.map(friend => {
            return (
              <Friend key={friend.id} details={friend} />
            )
          })
        } */}
      </div>
    )
  };


export default App;
