import React, { useState } from 'react';
import './App.css';

//components
import Form from './components/Form';

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



  return (
    <div className="App">
      <h1>Team Onboarding</h1>
      <Form formValues={formValues} disabled={disabled} />
    </div>
  );
}

export default App;
