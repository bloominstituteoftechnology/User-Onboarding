import React, { useEffect, useState } from 'react';
import './App.css';
import 'normalize.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import User from './components/User';
import axios from 'axios';
import schema from './validation';
import * as yup from 'yup';

// structure of the form
const initialValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
};

// possible errors from form setup
const initialErrors = {
  name: '',
  email: '',
  password: '',
  tos: false,
};

const initialUsers = [];
const initialDisabled = true;

function App() {

  // slices of state for users, form values, form errors, disabled
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // axios post sends newUser and then receives data w/ current users added
  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialValues);
      })
      .catch((err) => console.log(err));
  };

  // use yup to validate values, then set form errors if any
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

  // trim whitespace from submitted names and emails only, then postNewUser
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      pass: formValues.password,
      tos: formValues.tos,
    };
    postNewUser(newUser);
    console.log(newUser);
  };

  // trigger schema check if formValues changes
  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='App'>
      <h1>USER ONBOARDING</h1>
      {/* render Form and all props */}
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
