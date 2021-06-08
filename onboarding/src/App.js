import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import UserList from './components/UserList'
import * as yup from 'yup'
import schema from './formValidation'
import axios from 'axios'

function App() {
  const API_URL = "https://reqres.in/api/users"

  const defaultUser = {
    name: '',
    password: '',
    email: '',
    termOfUse: false,
  }

  const errorDefault = {
    name: '',
    password: '',
    email: '',
    termOfUse: false,
  }
  
  const [ user, setUser ] = useState(defaultUser)
  const [ errorUser, setErrorUser ] = useState(errorDefault)
  const [ listOfUsers, setListOfUsers ] = useState([]) 
  const [ disabled, setDisabled ] = useState(true)
  
  const userForm = ({ target }) => {
    const { value, name } = target
    yup.reach(schema, name)
    .validate(value)
    .then(() => {setErrorUser({...errorUser, [name]: ""})})
    .catch(err => {setErrorUser({...errorUser, [name]: err.message})})
    setUser({
      ...user,
      [name]: value
    })
  }

  const reactSubmit = () => {
    //add verfication not same user email and user and email and ...
    axios.post(API_URL, [...listOfUsers, user])
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
    
    setListOfUsers([...listOfUsers, user])
    setUser(defaultUser)
  }

  useEffect(()=>{
    schema.isValid(user)
    .then(valid => setDisabled(!valid))
  }, [user])

  return (
    <>
    <div>{errorUser.name}</div><div>{errorUser.email}</div><div>{errorUser.password}</div>
    <Form reactSubmit={reactSubmit} userForm={userForm} user={user} disabled={disabled}/>
    <UserList listOfUsers={listOfUsers} />
    </>
  );
}

export default App;
