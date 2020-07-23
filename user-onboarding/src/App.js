import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import * as yup from 'yup'; 
import Form from './Form';
import './App.css';
import formSchema from './validation/formSchema';
import Member from './Member';

// INITIAL STATES // 
// Form Values // 
const initialFormValues = {
  name: '',
  email: '', 
  password: '', 
  tOs: {
    read: false,
  }
}
// Form errors // 
const initialFormErrors = {
  name: '', 
  email: '',  
}
// Member list (array) and button disabled // 
const initialMembers = []; 
const initialDisabled = true;

function App() {
  // set states for: member and a member setter, form values and setting form values, form errors, and the status of the disabled button
  const [members, setMembers] = useState(initialMembers); 
  const [formValues, setFormValues] = useState(initialFormValues); 
  const [formErrors, setFormErrors] = useState(initialFormErrors); 
  const [disabled, setDisabled] = useState(initialDisabled); 

  // create axios call, put members in state, and reset the form value fields on successful post 
const getMembers = () => {
  axios.get("https://reqres.in/api/users")
.then(res => {
  console.log(res);
  // setMembers(res.data);
  // setFormValues(initialFormValues);
})
.catch(err => {
  console.log(err);
}, [])
}
// establishing axios post, to post new members upon registration
const postNewMember = newMember => {
  axios.post("https://reqres.in/api/users", newMember)
  .then(res => {
    setMembers([res.data, ...members])
    setFormValues(initialFormValues)
  })
  .catch(err => {
    console.log(err)
  }, [])
}

// helper function time! But first we need schema validations for the form and import them \\ 

const inputChange = (name, value) => {
  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setFormErrors({
      ...formErrors, 
      [name]: ""
    })
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,
      [name]: err.errors[0]
    })
  })
  setFormValues({
    ...formValues,
    [name]: value
  })
}

const checkboxChange = (name, isChecked) => {
  setFormValues({
    ...formValues,
    tOs: {
      ...formValues.tOs,
      [name]: isChecked
    }
  })
}

const submit = () => {
  const newMember = {
    name: formValues.name.trim(), 
    email: formValues.email.trim(), 
    password: formValues.password.trim(),
    tOs: Object.keys(formValues.tOs),
  }
  postNewMember(newMember)
}

// side effects \\

useEffect(() => {
  getMembers()
}, [])

useEffect(() => {
  formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
  })
}, [formValues])


  return (
    <div>
      <h1>Advanced Forms - Basic AF</h1>

      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }

      <Form 
      values={formValues}
      inputChange={inputChange}
      checkboxChange={checkboxChange}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      />
    </div>
  );
}

export default App;
