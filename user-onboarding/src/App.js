import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
// import axios from 'axios';


import schema from '../components/formSchema';
import * as yup from 'yup';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  checked: false,
}

const formErrors = {
  username: '',
  email: '',
  password: '',
  terms: '',
}

function App() {

  // const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues); 
  const [errors, setError] = useState(formErrors);

  const updateForm = (name, value) => {
      validate(name, value)
      setFormValues({ ...formValues, [name]: value});
    }

    const validate = (name, value) => {
      yup.reach(schema, name)
      .validate(value)
      .then(() => setError({ ...formErrors, [name]: '' }))
      .catch(err => setError({ ...formErrors, [name]: err.errors[0] }))
    }

  // const updateForm = (inputName, inputValue) => {
  //   setFormValues({ ...formValues, [inputName]: inputValue });
  // }

  
  // }

  // const submitForm = () => {
  //   const newMember = {
  //     username: formValues.username.trim(),
  //     email: formValues.email.trim(),
  //     password: formValues.password.trim(),
  //     terms: formValues.terms
  //   }

  //   if (!newMember.username || !newMember.email || !newMember.password) {
  //     setError(`dang glob it, you didn't fill out the form properly!!`);
  //   } else {
  //     axios.post('reqres.in/api/users', newMember)
  //       .then(res => {
  //         const membersFromServer = res.data;
  //         setMembers([ membersFromServer, ...members ]);
  //         setFormValues(initialFormValues);
  //       }).catch(err => console.error(err))
  //       .finally(() => setError(""))
  //   }
  //   setMembers(newMember);
  // }

  

  // useEffect(() => {
  //   axios.get('reqres.in/api/users').then(res => setMembers(res.data))
  // }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced App Form</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Form
          values={formValues}
          change={updateForm}
          // submit={submitForm}
        />
      </header>

      {/* {
        members.map(members => {
          return (
            <Members key={members.id} details={members} />
          )
        })
      } */}

    </div>

    

  );
}

export default App;
