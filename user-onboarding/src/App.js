import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

import schema from '../src/validation/formSchema';
import * as yup from 'yup';

//components
import Form from './components/Form';
import Team from './components/Team';

//initial form values
const initialFormValues = {
  //text input
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  //dropdown
  role: '',
  //checkbox
  termsOfService: false
}

const initialErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
  termsOfService: false
}

const initialTeamMembers = [];
const initialDisabled = true;


function App() {
//state
const [formValues, setFormValues] = useState(initialFormValues);
const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
const [formErrors, setFormErrors] = useState(initialErrors);
const [disabled, setDisabled] = useState(initialDisabled);


//helper functions

const getTeamMembers = () => {
  axios.get("https://reqres.in/api/users")
    .then(response => {
      setTeamMembers(response.data.data);
    })
    .catch(err => {
      console.error(err);
    })
}

const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then( () => setFormErrors({...formErrors,[name]: ""}))
    .catch( err => setFormErrors({...formErrors, [name]:err.errors[0]}))
}

const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues,[name]:value});
}

const postNewMember = (newMember) => {
  axios.post('https://reqres.in/api/users', newMember)
    .then(response => {
      setTeamMembers([response.data, ...teamMembers])
    })
    .catch(err => {
      console.error(err);
    })

}

const submitForm = () => {
  const newMember = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    role: formValues.role,
    termsOfService: ["termsOfService"].filter(term => !!formValues[term])
  }
  postNewMember(newMember);
}

//side effects 

useEffect(()=>{
  getTeamMembers();
},[])

useEffect (()=> {
  schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    })
},[formValues])


  return (
    <div className="App">
      <h1>Team Onboarding</h1>
      <Form formValues={formValues} formErrors={formErrors} disabled={disabled} inputChange={inputChange} submitForm={submitForm}/>
      <Team teamMembers={teamMembers} />
    </div>
  );
}

export default App;
