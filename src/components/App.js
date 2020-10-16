import React, { useState } from 'react';
import '../App.css';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../formSchema';
import User from './User';


///// DECLARING INITIAL VALUES FOR STATE /////

const initialUsers = [];
const initialFormValues = { //Formating form values 
  name: "",
  email: "",
  password: "",
  tos: false,
};
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
}

function App() {

  //SLICING STATE 
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  //// HELPER FUNCTIONS ---------------------------------------------

  //Function that takes a newUser Object
    // Post new user to Dummy API
    // Adds retunred User Data to User State 
    // Resets form values to initial
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

  //// EVENT HANDLERS -----------------------------------------------

  // Creating a function (inputChange) that takes the input changes from 
    // the user - Validates them with yup against the schema (& handling errors)
    // Then adds the changes to state as formValues
  const inputChange = (name, value) => { //Takes a key -value pair (name, value) as params
    yup
      .reach(schema, name) //yup.reach matches the name to coresponding name in schema
      .validate(value) //yup.validates checks the value agains the rules in the schema
      .then(() => { // Happy Path
        setFormErrors({ 
          ...formErrors, 
          [name]: "", //Add empty entry into form errors - not the [] around name! OVERIDE
        });
      })
      .catch((err) => { // Sad Path
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0], // Loggin errors to state
        })
      });

    // Add from values to state, appending array 
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const deleteUser = (id) => {
    const newUsers = users.filter(user => user.id !== id)

    setUsers(newUsers)
  }


  // Function formSubmit to happen on submission of form 
    // makes a newUser object from validated form values 
    // passes new user into postNewUser (which posts the user to API and State)
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos,
    };
    postNewUser(newUser);
  }


  //Lets not forget to put our hard work on display
  return (
    <div className="App">
      <h1>User Onboarding App!</h1>
      <Form 
        //Passing down some information
        values={formValues}
        errors={formErrors}
        //And passing down some functions so we can mess with the state up here
        change={inputChange}
        submit={formSubmit}
      />
      <div className="user-wrapper">
        {users.map((user) => (
            <div>
              <User 
                key={user.id} 
                name={user.name}
                email={user.email}
                password={user.password}
              />
            </div>
        ))}
      </div>
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