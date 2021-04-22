import './App.css';
import Form from './Form';
import Users from './Users';
import React, { useState,useEffect } from 'react';
import axios from 'axios'
import * as yup from "yup"
import schema from "./Validation";

const userslist = [
  {name: 'Ricky', email:'ricky@ricky.com',password:'classified',terms:true},
  {name: 'Mike', email:'mike@mike.com',password:'classified',terms:true},
]
const initialFormValues = {
  name: '',
  email: '',
  password:'',
  terms:false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password:'',
  terms:false,
};
const initialDisabled = true;

function App() {
  const [users,setNewUsers] = useState(userslist);
  const[formValues,setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setDisabled] = useState(initialDisabled); // boolean


  
  const postNewUser = (newUser)=>{
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      console.log("RES:",res)
      setNewUsers([...users, res.data])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err);
    })
    
  }

  
  const onSubmit = event =>{
    const newUser ={
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        term: formValues.term,
    }
    postNewUser(newUser);
}
const inputChange = (name, value) => {
  yup.reach(schema, name).validate(value).then(() => {
      setFormErrors({...formErrors,[name]: "",});
    }).catch((err) => {
      setFormErrors({...formErrors,[name]: err.errors[0],});
    });

  setFormValues({
    ...formValues,
    [name]: value, 
  });
};

useEffect(() => {
  schema.isValid(formValues).then((valid) => {
    setDisabled(!valid);
  });
}, [formValues]);



  return (
    <div>
      <div className = "container">
        <h1>New User Onboarding Form</h1>
       <Form 
         values = {formValues}
         update = {inputChange}
         submit = {onSubmit}
         disabled = {disabled}
         errors = {formErrors}
         />
      </div>
      <div className = "container">
        <h1>Users</h1>
       {
       users.map(item => {
         return (
           <Users key={item.id} user ={item} />
         )
       })
     }
      </div>
     
   </div>
  );
}

export default App;
