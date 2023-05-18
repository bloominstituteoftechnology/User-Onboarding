
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import formSchema from './Validation/FormSchema';
import * as yup from 'yup';
import Form from './Component/Form';

const initialFormValues = {
  name:"",
  email:"",
  password:"",
  terms: false,
}

const initialFormErrors = {
  name:"",
  email:"",
  password:"",
  terms: "",
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value});
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        console.error(err)
      })
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch((err) => setFormErrors({...formErrors, [name]:err.errors[0]}))
  }
  
  
  return (
    <div className="App">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      {users.map(user => (
        <div ket={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
