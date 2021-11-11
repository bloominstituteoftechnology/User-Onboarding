import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import axios from 'axios'
import schema from './Validation/formSchema'
import * as yup from 'yup'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  tos: ''
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const makeChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const makeSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }
   
  

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: '' }))
    .catch(err => setFormErrors(err))
  }

  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={makeChange} 
      errors={formErrors} 
      submit={makeSubmit}
      />
      {users.map(user => {
        <div className='usercard' key={user.id}> 
          <p>
            {user.email}
          </p>
          <p>
            {user.createdAt}
          </p>
        </div>
      })}
    </div>
  );
}

export default App;
