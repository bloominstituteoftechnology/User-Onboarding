import './App.css';
import Form from './components/Form'
import Member from './components/Member'
import React, { useState } from 'react';
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
  name: "",
  email: "",
  password: "",
  terms: false,
} 

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ members, setMembers ] = useState([])

  const onChange = event => {
    const { name, value, type, checked } = event.target;

    const valueToUse = type === 'checkbox' ? checked : value;
    setFormValues({
      ...formValues, [ name ] : valueToUse
    })
  }

  const onSubmit = event => {
    event.preventDefault();

    const newMember = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
      terms:formValues.terms,
    }

    postNewMember(newMember)
    setMembers(newMember, ...members)
    setFormValues(initialFormValues)
  }


    const postNewMember = (newUser) => {
      axios.post("https://reqres.in/api/users", newUser)
      .then(res => {
        setMembers(newUser, ...members)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
    

  

  return (
    <div className="App">
      <h1>User Onboarding Form</h1>
      <Form
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      {
        members.map((mem , index ) => (
          <Member
          key={index}
          details={members}
          >
          {mem.name}
          </Member>
        ))
      }
    </div>
  );
}

export default App;
