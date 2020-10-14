import React, { useState, useEffect } from 'react';
import './App.css';
import User from "./components/User"
import Form from "./components/Form"
import axios from "axios";
//import yup
import * as yup from "yup";
import schema from "./validation/formSchema";

const initialValues = {
  //Text fields
  name: "",
  email: "",
  password: "",
  //Checkbox
  terms: false,
}
const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  terms: false,
}
const initialUsers = [];
const initialDisabled = true;

export default function App() {
  // Setting initial state
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [userValues, setUserValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // Helper functions
  const getUser = () => {
    axios 
      .get(`https://reqres.in/api/users`)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        debugger;
        alert(`GET error! `, error)
      })
  };
  
  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((response) => {
        setUsers([response.data, ...users]);
        setUserValues(initialValues);
      })
      .catch((error) => {
        alert(`POST error! `, console.log(error));
      })
  };

  // Event handlers
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
      .catch((error) => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0],
        });
      });

    setUserValues({
      ...userValues, 
      [name]: value,
    })
  };

  const formSubmit = () => {
    const newUser = {
      name: userValues.name.trim(),
      email: userValues.email.trim(),
      password: userValues.password.trim(),
      terms: userValues.terms,
    }
    postNewUser(newUser);
  };

  // Side Effects
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    schema.isValid(userValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [userValues]);


  return (
    <div className="App">
     <Form 
      values={userValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
     />

     {users.map((user) => {
       return <User key={user.id} details={user} />;
     })}
    </div>
  );
}


