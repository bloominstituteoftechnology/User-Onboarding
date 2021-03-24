import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './Form';
import schema from './formSchema';
import * as yup from 'yup';
import './App.css';

const initialFormValues = {
  name: '',
  email:'',
  password: '',
  tos: false
}

const initialUsers=  [];
const initialDisabled = true;

const initialFormErrors = {
  name: '',
  email:'',
  password: '',
  tos: false
}

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    
    yup
    .reach(schema, name) // get to this part of the schema
    //we can then run validate using the value
    .validate(value) // validate this value
    .then(() => {
      // happy path and clear the error
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    // if the validation is unsuccessful, we can set the error message to the message
    // returned from yup (that we created in our schema)
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        // validation error from schema
        [name]: err.errors[0],
      });
    });

    setFormValues({
      ...formValues, [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: true
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues])

  const postNewUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then((res) => {
      console.log(res);
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
  }

  return (
    <div className="App">
      <Form form={formValues} disable={disabled} change={inputChange} submit={formSubmit} errors={formErrors} />
    </div>
  );
}

export default App;
