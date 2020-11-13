import React, { useState, useEffect } from 'react';
import User from './components/User';
import UserForm from './components/UserForm';
import axios from 'axios';
import schema from './validation/formSchema';
import * as yup from 'yup';
const initialFormValues = {
  name: '',
  email: '',
  password: '',
  //dropdown menu
  role: '',
  //radio button
  status: '',
  //checkbox
  terms: false,
};
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  role: '',
  status: '',
  terms: false,
};
const initialUser = [];
const initialDisabled = true;
const App = () => {
  const [user, setUser] = useState(initialUser);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled); //boolean

  const getUsers = () => {
    axios
      .get('https://reqres.in/api/users')
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };

  const postNewUser = (newUser) => {
    axios
      .post('https://reqres.in/api/users', newUser)
      .then((res) => {
        setUser([...user, res.data]);
        setFormValues(initialFormValues); //resets form
      })
      .catch((err) => {
        debugger;
        console.log(err);
      });
  };
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
      status: formValues.status,
      terms: ['terms'].filter((obj) => formValues[obj]),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  return (
    <div>
      <div className='container'>
        <h1>User Onboarding</h1>
        <UserForm
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
        {user.map((user) => {
          return <User key={user.id} details={user} />;
        })}
      </div>
    </div>
  );
};
export default App;
