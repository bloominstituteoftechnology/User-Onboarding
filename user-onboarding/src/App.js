import React, { useState, useEffect } from 'react'
import Form from './form/Form'
import axios from 'axios';
import './App.css'
import schema from './formSchema';
import * as yup from 'yup';



  

const initialFormValues = { 
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  termsOfService: false,

}




const initialFormErrors = {
  firstName: '',
  email: '',
  
}

const initialUsers = []



function App() {
  const [users, setUsers] = useState(initialUsers) 

const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)

  const postNewUser= (userObj) => {
    axios.post('https://reqres.in/api/users', userObj)
      .then(res => {
        setUsers([res.data, ...users]);
      }).catch(err => {
        console.error(err);
      })
  }

  return (
    <div className="App" >
      <Form post={postNewUser} users={users} values={formValues} />
    </div>
  );
}

export default App;
