import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Form'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/FormSchema'
import User from './User'

const initialFormValues = { // starting values for the form
  first_name: '',
  last_name: '',
  email: '',
  pass: '',
  tos: false,
}

const initialErrors = { // starting error messages
  first_name: '',
  last_name: '',
  email: '',
  pass: '',
  tos: '',
}

const initialUsers = [] // initial array of Users

const initialDisabled = true // button initial state

function App() {
  const [users,setUsers] = useState(initialUsers)
  const [formValues,setFormValues] = useState(initialFormValues)
  const [formErrors,setFormErrors] = useState(initialErrors)
  const [disabled,setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    // let's validate this specific key/value
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
    yup
      .reach(schema, name)
      // we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => { // eslint-disable-line
        setFormErrors({
          ...formErrors,
          [name]: ""
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        });
      });
  }

  const postNewUser = newUser => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newUser` to `http://localhost:4000/friends`
    //    and regardless of success or failure, the form should reset
    axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        console.log(users)
        setUsers([...users, res.data.data]) // do not do this on auto
      })
      .catch(err => {
        debugger // eslint-disable-line
        console.log(err)
      })
      .finally(() => {
        // this woudl be tbe good spot to clean the form
        setFormValues(initialFormValues)
      })
  }


  const formUpdate = ( name, value ) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      first_name: formValues.first_name.trim(),
      last_name: formValues.last_name.trim(),
      email: formValues.email.trim(),
      pass: formValues.pass.trim(),
    }
    postNewUser(newUser)
  }

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
      .then(res =>{
        setUsers(res.data.data)
      })
      .catch(err => {
        console.log (err)
      })
  }, [])

  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES

    /* Each time the form value state is updated, check to see if it is valid per our schema.
    This will allow us to enable/disable the submit button.*/

    /* We pass the entire state into the entire schema, no need to use reach here.
    We want to make sure it is all valid before we allow a user to submit
    isValid comes from Yup directly */
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div className="App">
      <Form
        values={formValues}
        update={formUpdate}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        users.map(user => {
          return (
            <User details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
