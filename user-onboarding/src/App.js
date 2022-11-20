import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Form from './Components/Form';
import schema from './valids/formSchmea';
import './App.css';


const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}
const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ users, setUsers ] = useState([])

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }
  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
    const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res=> {
        setUsers([res.data, ...users ])
      })
      .catch(err => console.error(err))
  }
 


  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} />
      {users.map(user => (
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
        ))}
    </div>
  );
}

export default App;