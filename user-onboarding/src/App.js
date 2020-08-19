import React, { useState, useEffect } from 'react';
import Form from './Form';
import './App.css';
import './Form.css';
import UserCard from './UserCard'
import axios from 'axios'

const initialUser = []
const initialFormData = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  tos: false
}
const initialFormError = {
  username: '',
  email: '',
  password: '',
  tos: ''
}

function App() {

const [user, setUser] = useState(initialUser)
const [formData, setFormData] = useState(initialFormData)
const [formError, setFormError] = useState(initialFormError)

const getUser = () =>{
  axios.get('https://reqres.in/api/users')
  .then(res =>{
    setUser(res.data.data)
    console.log(res.data.data)
  })
  .catch(error=>{
    console.log(error)
  })
}
useEffect(()=>{
  getUser()
},[])
//posts new user to the database
const postNewUser = newUser => {
  axios.post('https://reqres.in/api/users',newUser)
  .then((res) =>{
    // setUser()
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })
  .finally(()=>{
    setFormData(initialFormData)
  })
}
// new User on submit
const submit = () =>{
  const newUser = {
    first_name: formData.first_name.trim(),
    last_name: formData.last_name.trim(),
    email: formData.email.trim(),
    password: formData.password.trim(),
  }
  postNewUser(newUser)
}

const dataInput = (name, data) =>{
  setFormData({
    ...formData, [name]: data
  })
}

const dataCheck = (name, ischecked) =>{

  setFormData({
    ...formData,
    [name]: ischecked
  })
}

  return (
    <div className="App">
      <Form 
        data={formData}
        submit={submit}
        dataCheck={dataCheck}
        dataInput={dataInput}
      />
      {
        user.map(eachUser =>{
          return (
            <UserCard key={eachUser.id} details={eachUser}/>
          )
        })
      }
    </div>
  );
}

export default App;
