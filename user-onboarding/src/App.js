// Imports //
import React, { useState, useEffect } from 'react';
import './App.css';
import schema from './schema';
import Card from './Card';
import Form from './Form';
import axios from 'axios';
import * as yup from 'yup';

// Initialization //
const initialFormValues = {
  username: '',
  email: '',
  password: '',
  tos: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
};

const initialFriends = [];
const initialDisabled = true;

function App() {

  // States //
  const [friends, setFriends] = useState(initialFriends);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // Helpers //
  const getFriends = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const postNewFriend = (newFriend) => {
    axios
      .post(`https://reqres.in/api/users`, newFriend)
      .then(res => {
        setFriends([res.data, ...friends]);
        setFormValues(initialFormValues);
      })
      .catch(err => {
        console.log(err)
      })
  }

  // Event Handlers //
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch(err => {
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

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      tos: formValues.tos
    };
    postNewFriend(newFriend);
  };

  // Side Effects //
  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);



  return (
    <div className='container'>
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {friends.map((friend) => {
        return <Card key={friend.id} details={friend} />;
      })}
    </div>
    
  );
}

export default App;
