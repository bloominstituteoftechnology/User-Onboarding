import React, { useEffect, useState } from 'react';
import './App.css';
import 'normalize.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import User from './components/User';
import axios from 'axios';
import schema from './validation';
import * as yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  pass: '',
  tos: false,
};

const initialErrors = {
  name: '',
  email: '',
  pass: '',
  tos: false,
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const getUsers = () => {
  //   axios
  //     .get('https://reqres.in/api/users')
  //     .then((res) => {
  //       setUsers(res.data.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialValues);
      })
      .catch((err) => console.log(err));
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: '' });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
    setFormValues({ ...formValues, [name]: value });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      pass: formValues.pass,
      tos: formValues.tos,
    };
    postNewUser(newUser);
    console.log(newUser);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='App'>
      <h1>TEST</h1>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      <h2>Current users:</h2>
      {users.map((user) => {
        return <User key={uuidv4()} userinfo={user} />;
      })}
    </div>
  );
}

export default App;
