import logo from './logo.svg';
import './App.css';
import Form from './Form';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/formSchema';
import User from './User';

const initialFormValues = {
  name: '',
  password: '',
  email: '',
  tos: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: '',
}


const initialUsers = [];

function App() {

  const [users, setUsers] = useState(initialUsers)   
  
  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors) 

  const initialDisabled = true;

  const [disabled, setDisabled] = useState(initialDisabled) 
  

  const validate = (name, value) =>{
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }


  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

//************* */

  
const getUsers = () => {
  axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data);
      console.log(users)
    })
    .catch(err => console.error(err))
}

  const postNewUser = newUser => {
      axios.post('https://reqres.in/api/users' , newUser)
        .then(res => {
          setUsers([res.data, ...users])
        })
        .catch(err => console.error(err))
        .finally(() =>{
          setFormValues(initialFormValues);
        }) 
  }


  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos.trim(),
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <Form
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;

