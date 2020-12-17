import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import Form from './Form';
import schema from './schema';

const initialValues = {
  name: '',
  email: '',
  password: '',
  serviceTerms: false,
};
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
};
const initialUsers = [];
const initialDisabled = false;



function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data)
      debugger
    })
    .catch(err => {
      debugger
      console.log(err)
    })
  }
  console.log(users);

  const postNewUser = newUser => {
    axios
    .post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers(...users, res.data)
      setFormValues(initialValues)
    })
    .catch(err => {
      debugger
      console.log(err)
    })
  }


  const validate = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {
      debugger
      setFormErrors({
        ...formErrors, [name]: ''
      })
    })
        .catch(err => {
          debugger
          setFormErrors({
            ...formErrors, [name]: err.errors[0]
          })
        })
  }
  // inputChange is changing the formValues by spreading to get a new form ?// Values array, then changing whatever was changed [name] to whatever // // value it was changed to value

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues, [name]: value
    })
  }

const formSubmit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    serviceTerms: formValues.serviceTerms
  }
  //invoke post function here
  postNewUser(newUser)
}
useEffect(() => {
  getUsers()
}, [])

useEffect(() => {
  schema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])


  return (
    <div className="App">
    <Form 
    values={formValues}
    submit={formSubmit}
    change={inputChange}
    disabled={disabled}
    errors={formErrors} />
    </div>
  );
}

export default App;
