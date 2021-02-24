import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import Form from './Form'
import Hero from './Hero'



const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
  roll: ''
}
function App() {

  const [users, setUsers] = useState('')

  return (
    <div className="App">
      <header><h1>Welcome to the Onboarding!</h1></header>
      <Form />
    </div>
  );
}

export default App;
