
import React, { useState} from 'react';
import './App.css';
import axios from 'axios';
import Form from './Components/Form';
import User from './Components/User';
import schema from './Validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {

  name: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors = {
  name: '',
  email: '',
  password: ''
}

const initialUsers = [];
const initialDisabled = true;


export default function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);



  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => console.error(err))
  }

  const postNewUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users]);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setFormValues(initialFormValues);
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]:value})
  }

  // const formSubmit = () => {
  //   const newUser {
      
  //   }
  // }




  return (
    <div className="App">

    </div>
  );
}


