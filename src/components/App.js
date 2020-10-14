import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../formSchema';


//Define some needed varibles to reset state to baseline
const initialUsers = [];
const initialFormValues = {
  name: "",
  email: "",
  password: "",
  /// Checkbox - so we're rocking the bools ///
  tos: false,
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
}

function App() {

  //Grab the necessary Slices
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  //Some Helpers for us - lets stay DRY
  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        console.log(res.data);
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err);
      })
  }

  //Event Handlers
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, 
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    postNewUser(newUser);
  }

  return (
    <div className="App">
      <h1>User Onboarding App!</h1>
      <Form 
        values={formValues}
        errors={formErrors}
        change={inputChange}
        submit={formSubmit}
      />
    </div>
  );
}

export default App;


/* Lets Plan some things here: 

Create Form 
 - Form should accept: Name, Email, Password, Terms of Service Checkbox, Submit Button
 - Enable/ Disable submit button based on Form Validation 

Form Validation & Error Messaging
  - Use Yup to set up validations w/ custom error messages to display on the screen 

Post Request: 
  - Use axios post request to send form data to endpoint 'https://reqres.in/api/users'
  -Verify we're getting a response back (console.log(res))

Display Returned Data to Screen: 
  - Slice some State for users 
  - When we post and get new user data back - setUser(res, ...users), update users
  - Render users in app
*/