import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import * as yup from 'yup';
import Form from './components/Form';
import Card from './components/Card';

function App() {

  const Data = {
    name: '',
    email: '',
    password: '',
    role: '',
    terms: false
  };

  const Schema = yup.object().shape({
    name: yup.string().required('Please enter a name.').min(3, 'The name must be at least 3 characters in length.'),
    email: yup.string().required('Please enter an email.').notOneOf(['waffle@syrup.com'], 'That email is already taken.').email('The email is not valid.'),
    password: yup.string().required('Please enter a password.').min(6, 'The password must be at least 6 characters in length.'),
    role: yup.string().required('Please select a role.').oneOf(['Engineer', 'Developer', 'Designer'], 'You must select a role from the list.'),
    terms: yup.boolean().oneOf([true], 'Please agree to the terms of service.')
  });

  const [users, setUsers] = useState([]);

  const [values, setValues] = useState(Data);

  const [errors, setErrors] = useState({ ...Data, terms: '' });

  const [disabled, setDisabled] = useState(true);

  const update = (name, value) => {

    yup
      .reach(Schema, name)
      .validate(value)
      .then(valid => {
        setErrors({ ...errors, [name]: '' });
      })
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }));

    setValues({ ...values, [name]: value });

  };

  const submit = () => {

    const user = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
      role: values.role
    };

    const API = new URL('/api/users', 'https://reqres.in');

    Axios
      .post(API.href, user)
      .then((res) => {
        setUsers([res.data, ...users]);
        setValues(Data);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  useEffect(() => {
    Schema.isValid(values).then(valid => {
      setDisabled(!valid);
    });
  }, [values]);

  return (
    <div className="App">
      <h1>Advanced Form Management</h1>
      <Form
        values={values}
        errors={errors}
        update={update}
        submit={submit}
        disabled={disabled}
      />
      {
        users.map((member, i) => {
          return (
            <Card key={member.id || i} data={member} />
          )
        })
      }
    </div>
  );

}

export default App;
