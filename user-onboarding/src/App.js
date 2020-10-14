import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form"
import axios from "axios";
//you'll probably still have to import *yup*, and maybe the *schema* if you have to create one

const initialValues = {
  //Text fields
  name: "",
  email: "",
  password: "",
  //Checkbox
  terms: false,
}
const initialUsers = [];
const initialDisabled = true;

export default function App() {
  // Setting initial state
  const [users, setUsers] = useState(initialUsers);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [userValues, setUserValues] = useState(initialValues);

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
  
  cosnt postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((response) => {
        setUsers([response.data, ...users]);
        setUserValues(initialValues);
      })
      .catch((error) => {
        alert(`POST error! `, error);
      })
  };

  // Event handlers
  const inputChange = (name, value) => {
    
  }

  return (
    <div className="App">
     <Form />
    </div>
  );
}


