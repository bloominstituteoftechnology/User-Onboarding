import React, { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import User from './components/User';

import axios from 'axios';
// import schema from '../validation/formSchema';
// import * as yup from 'yup';
function App() {

const initialFormValues ={
  first_name:'',
  last_name:'',
  email:'',
  termsOfService: false
 
}
 
const [users, setUsers] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)  

const getUsers = () => {
  axios.get('https://reqres.in/api/users')
    .then(res => {
       
      console.log(res.data.data);
       
      setUsers(res.data.data)
      
    }).catch(err => {
      console.error(err);
})}

useEffect(() => {
   
  getUsers()
}, [])

const formSubmit = () =>{
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    termsOfService: formValues.termsOfService

  }
   
  setUsers([...users, newUser])

}

const inputChange = (name, value) => {
setFormValues({ ...formValues,[name]: value })
}
  return (
    <div className="App">

      <header className="App-header">
        <h1>User App</h1>
      </header>

      <div>
          <Form 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            
            />
           { users.map(user => {
              return(
                  <User key={user.id} details={user}/>      
              )
            })}
          
    </div>
    </div>
  );
}

export default App;
