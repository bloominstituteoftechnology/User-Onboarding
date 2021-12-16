import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import * as yup from 'yup';
import axios from 'axios';
import schema from './components/formSchema';
import User from './components/User';

// 1.initial states (initial form values, initial form errors, initial members, initial disabled functions)
const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false
};

const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: ''
};

const initialUsers = [];
const initialDisabled = true;


function App() {
// 2. set states here (members, member values, forme errors, disabled)
const [formValues, setFormValues] = useState(initialFormValues);
const [users, setUsers] = useState(initialUsers);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);

// 3. helpers (get members, post new member)
const getUsers = () => {
  axios.get('https://reqres.in/api/users')
  .then(res => {
    setUsers(res.data.data);
  })
  .catch(err => console.error(err))
}

// get users side effect
useEffect(() => {
  getUsers()
}, []);

useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users', newUser)
  .then(res => {
    setUsers([res.data, ...users])
  })
  .catch(err => console.error(err))
  .finally(() => setFormValues(initialFormValues))
}
// validation function 
const validate = (name, value) => {
  yup.reach(schema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}


// 4. input change function
const inputChange = (name, value) => {
// run validation here w yup
 validate(name, value);
 setFormValues({
   ...formValues,
   [name]: value
 })
}

// 5. form submit function
const formSubmit = () => {
  const newUser = {
    firstName: formValues.firstName.trim(),
    lastName: formValues.lastName.trim(),
    email: formValues.email.trim(),
    terms: !!formValues.terms
  }
  postNewUser(newUser)
}



  return (
    <div className="App">
      <header className="App-header">
        <h1>User Onboarding</h1>
      </header>
      
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

      {
        users.map((user, idx) => {
          return (
            <User key={idx} details={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
