import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

//components
import Form from './components/Form';
import Team from './components/Team';

//initial form values
const initialFormValues = {
  //text input
  name: '',
  email: '',
  password: '',
  //dropdown
  role: '',
  //checkbox
  termsOfService: false
}

const initialErrors = {
  name: '',
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



const inputChange = (name, value) => {
  console.log(name, value);
  setFormValues({...formValues,[name]:value});
}

const submitForm = () => {

}

//side effects 

useEffect(()=>{
  getTeamMembers();
  console.log(teamMembers);
},[])


  return (
    <div className="App">
      <h1>Team Onboarding</h1>
      <Form formValues={formValues} disabled={disabled} inputChange={inputChange} submitForm={submitForm}/>
      <Team teamMembers={teamMembers} />
    </div>
  );
}

export default App;
