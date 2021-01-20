//When creating npx creat-react-app, make sure to THEN cd into your project 
//folder (here it is my-app), to be able to add dependencies & get everything 
//working correctly

import React, { useState, useEffect } from 'react';
//placing the form state here in App.js
//import './App.css';
import Form from './components/Form';

import * as yup from 'yup';
import axios from 'axios'

//Yup Schema - outside the function scope
const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('Must include name.'),
  email: yup
    .string()
    .email()
    .required(), 
  password: yup
    .string()
    .required('Must include letters and numbers'),
  terms: yup
    .boolean()
    .oneOf([true])
});


function App() {
//Two slices of state, users & error
    const [usersState, setUsersState] = useState({
      name: '',
      email: '',
      password: '',
      terms: false
  });

  const [errorState, setErrorState] = useState({   
      name: '',
      email: '',
      password: '',
      terms: false
  });
//formSubmit function, axios post -> getting data & sending our gathered data
  const formSubmit = evt => {
      evt.preventDefault();
      console.log('form submitted!');
      axios.post('http://reqres.in/api/users', usersState) 
        .then( res => console.log(res))
        .catch(err => console.log(err))
  }; 
//validate function - validating the form fields with yup
  const validate = (evt) => {
    yup.reach(formSchema.evt.target.name)
        .validate(evt.target.value) 
        .then(res => {
            setErrorState({
                ...errorState,
                [evt.target.name]: ""
            })
        })
        .catch(err => {
            console.log(err.errors)
            setErrorState({
                ...errorState,
                [evt.target.name]: err.errors[0]
            })
        })

  }; 

//onChange function - keeps evt variable relevant, runs validate function, checks the validation sets the state
  const inputChange = evt => {
      evt.persist();
      validate(evt);
      let value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value; 
      setUsersState({ ...usersState, [evt.target.name] : evt.target.value}) 
  }

 return (
    <div className="App">
      <Form>

      </Form>
    </div>
  );
}

export default App;
