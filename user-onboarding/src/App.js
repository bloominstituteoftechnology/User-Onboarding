import './App.css';
import User from "./Components/User";
import NewUserForm from "./Components/NewUserForm";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/formSchema';

// declare initial values

const initialValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

// declare initial errors



export default function App() {

  //declare 4 slices of state
  const [formValues, setFormValues] = useState(initialValues);
  
  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }
  // use axios to get friends

  return (
    <div className="App">
      {// append NewUserForm with key's: 
      // value, submit, change, disabled, and errors 
    }
      <NewUserForm values={formValues} change={handleChange} />
    </div>
  );
}

