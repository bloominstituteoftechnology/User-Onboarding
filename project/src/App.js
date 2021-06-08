import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as yup from 'yup';
import formSchema, { passSchema } from './validation/formSchema';
import UserForm from './components/UserForm';
import axios from 'axios';
import API_URL from './constants/api';
import PrintUsers from './components/PrintUsers';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  tos: false,
};

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  tos: '',
};

function App() {

  const[users, setUsers] = useState([]);
  const[formValues, setFormValues] = useState(initialFormValues);
  const[formErrors, setFormErrors] = useState(initialFormErrors);
  const[disabled, setDisabled] = useState(true);

  const getUsers = () => {
    axios
      .get(API_URL)
      .then(res => {
        setUsers(res.data.data)
      })
      .catch(err => console.log(err))
  }

  const postNewUser = newUser => {
    axios 
      .post(API_URL, newUser)
      .then(res => {
        setUsers([...users, newUser]);
      })
      .catch(err => console.log(err))
      .finally(
        setFormValues(initialFormValues)
      )
  }

  const inputChange = (name, value) => {

    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.message})
      })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password,
      tos: formValues.tos,
    }
    postNewUser(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [users])

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        const yupPass = require('yup')
        require('yup-password')(yup)
        passSchema.isValid(formValues)
          .then(valid => {
            setDisabled(!valid)
      })
      })
  }, [formValues])

  return (
    <div className="App">
      <UserForm values={formValues} change={inputChange} submit={formSubmit} disabled={disabled} error={formErrors}/>
      {users && users.map(user =>
        <PrintUsers user={user} key={user.email}/>
        )}
      
    </div>
  );
}

export default App;
