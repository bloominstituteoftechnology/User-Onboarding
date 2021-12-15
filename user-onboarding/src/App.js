import React, { useState, useEffect } from 'react';
import Form from './Form';
import formSchema from './validation/formSchema';
import './App.css';
import axios from 'axios';
import * as yup from 'yup';



const initialUsers = [];
const initialDisabled = true;
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  abc: false,
  def: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  role: '',
  abc: '',
  def: '',
}

function App() {

  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postUser = newUser => {
    axios.post(`https://reqres.in/api/users`, newUser)
      .then(resp => {
        console.log(resp)
        setUsers([ resp.data, ...users ])
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
  
  return (
    <div className="App">
    
       <h1>User Onboarding</h1>
       <Form 
       values={formValues}
      //  change={inputChange}
      //  submit={formSubmit}
       disabled={disabled}
       errors={formErrors}
       />
    
    </div>
  );
}

export default App;
