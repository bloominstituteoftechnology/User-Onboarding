import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import React, { useState } from 'react'

const initialUsers = [

  {
    name: 'Peter Conley',
    email: 'peter@gmail.com',
    password: 'banana',
    tos: true,
  },
  { 
    name: 'Casey Harding',
    email: 'yachump@gmail.com',
    password: 'facebooklover',
    tos: true,
}
]

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false,
}

const initialErrors = {
    name: '',
    email: '',
    password: '',
    tos: '',
}

function App() {

  const [ users, setUsers ] = useState(initialUsers);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialErrors);

  const onChange = evt => {
    const { name, value } = evt.target;
  }

  return (
    <div className="App">
      <h1>User Onboarding Form</h1>
      <Form change={onChange}/>
    </div>
  );
}

export default App;
