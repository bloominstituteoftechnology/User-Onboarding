import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import UserForm from './Components/UserForm';
import User from './Components/User';
import schema from './Validation/formSchema';
import './App.css';

const initialFormValues ={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsOfService: false,
}

const initialFormErrors ={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);


  const getUsers = () =>{
    axios.get('https://reqres.in/api/users')
    .then((res) =>{
      console.log(res.data)
    })
    .catch((err) =>{
      console.log(err, 'error')
    })
  }

 

  const postNewUser = (newUser) =>{
    axios.post('https://reqres.in/api/users', newUser)
    .then((res) =>{
      setUsers([res.data, ...users]);
      setFormValues(initialFormValues);
    })
    .catch((err) =>{
      console.log(err, 'error')
    })
  }

  const inputChange = (name, value) =>{

    yup
    .reach(schema, name)
    .validate(value)
    .then(() =>{
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    })
    .catch((err) =>{
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  }

  const formSubmit = () =>{
    const newUser ={
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    postNewUser(newUser);
  }


  useEffect(() =>{
      getUsers();
    },[])


  useEffect(() =>{
    schema.isValid(formValues).then((valid) =>{
      setDisabled(!valid);
    })
  },[formValues])


  return (
    <div className="App">
      <UserForm 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map((user) =>{
        return <User key={user.id} details={user} />
      })} 
      
    </div>
  );
}

export default App;
