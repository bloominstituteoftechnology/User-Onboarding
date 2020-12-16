import React, { useState } from 'react'
import './App.css';
import axios from 'axios'
// import * as yup from 'yup'
import Form from './Components/Form'



function App() {

const [newUser, setNewUser] = useState([])

const postNewUser = (newUser) => {

  axios
  .post('https://reqres.in/api/users', newUser)
  .then((res) => {
    setNewUser([res.data, ...newUser])
  })
  .catch((err) => {
    console.log(err)
  })
}

  return (
    <div className="App">
     <h1>Head</h1>
     <Form setNewUser= {postNewUser(newUser)}/>
    </div>
  );
}

export default App;
