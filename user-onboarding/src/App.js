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

const initialFormErrors = {
  username:"",
  email:"",
  password:"",
}

const initialMembers = [];
const initialDisabled = true;

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ members, setMembers ] = useState(initialMembers);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ isDisabled, setIsDisabled ] = useState(initialDisabled);

  const postNewMember = (newUser) => {
    axios.post("https://reqres.in/api/users", newUser)
    .then(res => {
      setMembers([res.data, ...members])
      setFormValues(initialFormValues);
      // console.log(res)
    })
    .catch(err => {
      console.log(err)
    });
  };

  const onChange = event => {
    const { name, value, type, checked } = event.target;

    // Add yup validation
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
    };

    postNewMember(newMember)
    // setMembers([newMember, ...members])
    // setFormValues(initialFormValues)
  };


  return (
    <div className="App">
      <h1>User Onboarding Form</h1>
      <Form
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      <div>
        {
          members.map(mem => {
            console.log(mem)
            return <Member key={mem.id} details={members} />
          })
        }
      </div>
    </div>
  );
}

export default App;
