import './App.css';
import Form from './components/Form'
import Member from './components/Member'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validate/schema'


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
    })
    .catch(err => {
      console.log(err)
    });
  };

  const onChange = ( name, value ) => {

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [ name ] : "",
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name] : err.errors[0],
        })
      })
      setFormValues({
        ...formValues,
        [name]:value,
      })
  }

  const onSubmit = () => {

    const newMember = {
      name:formValues.name.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
      terms:formValues.terms,
    };

    postNewMember(newMember)
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setIsDisabled(!valid)
    });
  },[formValues])


  return (
    <div className="App">
      <h1>User Onboarding Form</h1>
      <Form
      values={formValues}
      onChange={onChange}
      onSubmit={onSubmit}
      disabled={isDisabled}
      errors={formErrors}
      />
      <div>
        {
          members.map(mem => {
            return <Member key={mem.id} details={mem} />
          })
        }
      </div>
    </div>
  );
}

export default App;
