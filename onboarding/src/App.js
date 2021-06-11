import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import UserList from './components/UserList'
import * as yup from 'yup'
import schema from './formValidation'
import axios from 'axios'
import styled from 'styled-components'
import './css/fonts.css'

const TitleOne = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: red;
`
const FormDiv = styled.div`
  font-family: 'Roboto', sans-serif;
  border: 2px solid grey;
  border-radius: 3px;
  padding: 20px;
`


function App() {
  const API_URL = "https://reqres.in/api/users"

  const defaultUser = {
    name: '',
    password: '',
    email: '',
    role: '',
    termOfUse: false,
  }

  const errorDefault = {
    name: '',
    password: '',
    email: '',
    role: '',
    termOfUse: false,
  }
  
  const [ user, setUser ] = useState(defaultUser)
  const [ errorUser, setErrorUser ] = useState(errorDefault)
  const [ listOfUsers, setListOfUsers ] = useState([]) 
  const [ disabled, setDisabled ] = useState(true)
  
  const userForm = (name, value) => {
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
    .then(response => setListOfUsers(response.data))
    .catch(err => console.log(err))
    .finally(() => setUser(defaultUser))
  }

  useEffect(()=>{
    schema.isValid(user)
    .then(valid => setDisabled(!valid))
    .finally(() =>{
      if(listOfUsers.find(({ name }) => name === user.name )){
        setErrorUser({
          ...errorUser,
          name: "This username is already taken"
        })
        setDisabled(true)
      }
      if(listOfUsers.find(({ email }) => email === user.email )){
        setErrorUser({
          ...errorUser,
          email: "This email is already taken"
        })
        setDisabled(true)
      }
    })}, [user])

  return (
    <>
    <FormDiv>
    <TitleOne>Register Form</TitleOne>
      <Form reactSubmit={reactSubmit} userForm={userForm} user={user} disabled={disabled} errorUser={errorUser}/>
    </FormDiv>
    <UserList listOfUsers={listOfUsers} />
    </>
  );
}

export default App;
