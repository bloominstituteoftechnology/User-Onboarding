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
  password: '',
  termsOfService: false,
}

const initialFormErrors ={
  firstName: '',
  lastName: '',
  password: '',
}

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  

  return (
    <div className="App">
      <UserForm 
      
      />
      <User 
      
      />
    </div>
  );
}

export default App;
