import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialFormValues = { name: '', email: '', password: '', userAgreement: false};

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
  }, [])

  const change = (name, value) => {
    console.log(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const postUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(resp => {
      console.log(resp);
    }
    )
    .catch(error => {
      console.error(error);
    })
  }

  const submitUser = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      userAgreement: formValues.userAgreement
    }
    postUser(newUser);
  }
  return (

    <Form formValues={formValues} setFormValues={setFormValues} users={users} setUsers={setUsers} change={change} submitUser={submitUser}/>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
