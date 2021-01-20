//When creating npx creat-react-app, make sure to THEN cd into your project 
//folder (here it is my-app), to be able to add dependencies & get everything 
//working correctly

import React, { useState, useEffect } from 'react';
//placing the form state here in App.js
//import './App.css';
import Form from './components/Form';

import * as yup from 'yup';
import axios from 'axios'




function App() {
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

const formSubmit = evt => {
    evt.preventDefault();
    console.log('form submitted!');
    axios.post('http://reqres.in/api/users', usersState) 
    .then( res => console.log(res))
    .catch(err => console.log(err))
}; 

  const validate = (evt) => {
    yup.reach(formSchema.evt.target.name)
        .validate(evt.target.value) //Pass it individual parts of the Schema is part of a good UX, validate AS they user goes
        .then(valid => {
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

}; ///what's happening is we ask yup to validate the data we give it versus the schema's requirements
//event.persist() -->allows us to keep using the event object. put it in your change handler as evt.persist()


//onChange function 
const inputChange = evt => {
    //console.log('input is changing!', evt.target.value, evt.target.checked);
    //if(evt.target.name === 'email') {
        //validateEmail(evt.target.value)
    //}
    validate(evt);
    
    let value = 
        evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value; //This is saying, if the target type is a checkbox, then check the checked property, otherwise just check whatever value of whatever other attribute is being passed
    
    setFormState({ ...formState, [evt.target.name] : evt.target.value}) //name is a form specific attribute that can be a reliable target

}

 return (
    <div className="App">
      <Form>

      </Form>
    </div>
  );
}

export default App;
