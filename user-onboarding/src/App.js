
import './App.css';
import './TeamForm.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './teamSchema';
import TeamForm from './TeamForm';
import Member from './Member';


const initialFormValues = {
  username: '',
  email: '',
  password: '',
  role: '',
  preference: '',
  gaming: '',
  photography: '',
  coding: '',
  tos: '',
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
  role: '',
  preference: '',
}

const initialMembers = []
const initialDisabled = true


function App() {

  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getMembers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        setMembers(res.data.data);
      }).catch(err => console.error(err))
  }

  const postNewMember = newMember => {
    axios.post('https://reqres.in/api/users', newMember)
      .then(res => {
        setMembers([res.data, ...members]);
      }).catch(err => console.error(err));

    setFormValues(initialFormValues);
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }


  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {

    const newMember = {
      name: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
      preference: formValues.preference.trim(),
      hobbies: ['gaming', 'photograhpy', 'coding'].filter(hobby => !!formValues[hobby])
    }
    postNewMember(newMember);
  }

  useEffect(() => {
    getMembers()
  }, [])

  useEffect(() => {

    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

console.log(members);
  return (
    <>
    <div classname="formTitle">
    <header><h1>Team Member Form</h1></header>
    </div> 

    <div className="formContainer">
      

      <TeamForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      
      
      <div className="mapTitle">
      <h1>Current Team Members</h1>
      </div>

      <div className="map">

     

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
      </div>
    </div>
    </>
  );

}

export default App;
