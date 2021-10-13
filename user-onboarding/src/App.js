import logo from './logo.svg';
import './App.css';
import Form from './Form';
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import User from './User';

function App() {
  
  const initialFormValues = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        termsOfService: false
  }
    //states for users and form values
    const [users, setUsers] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
  

   //get users on initial render
      const getUsers = () => {
        axios.get('https://reqres.in/api/users')
        .then(res => {
          setUsers(res.data.data)
        }).catch(err => {
          console.lerror(err)
        })
      }

      //initial render
      useEffect(()=>{
        getUsers()
      }, [])

      const updateForm = (name, value) => {
        setFormValues({...formValues, [name]:value})
      }

      const submitForm = () => {
          const newMember = {
            first_name: formValues.first_name,
            last_name: formValues.last_name,
            email: formValues.email,
            password: formValues.password,
            termsOfService: formValues.termsOfService
          }

          setUsers([newMember,...users]);
      }
    
    




  return (
    <div className="App">
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      <hr></hr>

      <h2>Users</h2>
      <hr></hr>
      {
        users.map(user => {
            return(
                <User key={user.id} details={user}/>      
            )
          }
        )}
    </div>
  );
}

export default App;
